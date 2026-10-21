import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'motion';
import { useTranslation } from '../services/i18n';

const positions = [[.2, .34, 30], [.54, .16, 35], [.69, .17, 30], [.23, .66, 32], [.8, .57, 49], [.57, .87, 34], [.72, .77, 26]];
const edges = [[0, 1], [0, 3], [0, 4], [1, 2], [1, 5], [2, 4], [3, 4], [3, 5], [4, 5], [2, 6], [5, 6], [1, 3]];
const nodeNames = {
    es: ['Clientes', 'Ideas', 'Diseño', 'Procesos', 'nodai', 'Integraciones', 'Automatizaciones'],
    en: ['Customers', 'Ideas', 'Design', 'Processes', 'nodai', 'Integrations', 'Automations'],
};
const descriptions = {
    es: ['Clientes conectados con cada parte de tu negocio.', 'Ideas que abren nuevas posibilidades.', 'Diseño que convierte ideas en experiencias simples.', 'Procesos que se acompañan de principio a fin.', 'Todo encuentra su punto de conexión en nodai.', 'Tus herramientas, trabajando en conjunto.', 'Automatizaciones que hacen avanzar tu operación.'],
    en: ['Customers connected with every part of your business.', 'Ideas that open up new possibilities.', 'Design that turns ideas into simple experiences.', 'Processes connected from start to finish.', 'Everything finds its connection in nodai.', 'Your tools, working together.', 'Automations that move your business forward.'],
};

export default function HeroGraph() {
    const { language } = useTranslation();
    const locale = language === 'es' ? 'es' : 'en';
    const fieldRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState<number | null>(null);
    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        const field = fieldRef.current;
        if (!field) return;
        const svg = field.querySelector('svg')!;
        const nodes = [...field.querySelectorAll<HTMLButtonElement>('.organic-node')];
        const bridges = [...field.querySelectorAll<SVGPathElement>('.organic-bridge')];
        const threads = [...field.querySelectorAll<SVGPathElement>('.organic-thread')];
        const signals = [...field.querySelectorAll<SVGCircleElement>('.organic-signal')];
        const reduced = matchMedia('(prefers-reduced-motion: reduce)');
        const state = { time: 0, mx: 0, my: 0 };
        let width = field.clientWidth;
        let height = field.clientHeight;
        let visible = false;
        let drift: ReturnType<typeof animate> | undefined;
        let pointer: ReturnType<typeof animate> | undefined;

        function draw() {
            if (!width || !height) return;
            const factor = Math.min(width / 460, 1.15);
            const points = positions.map(([px, py, radius], i) => {
                const moving = reduced.matches ? 0 : 1;
                const x = px * width + Math.sin(state.time + i * 1.7) * 15 * moving + state.mx * (.45 + i * .09);
                const y = py * height + Math.cos(state.time + i * 1.3) * 17 * moving + state.my * (.6 + i * .06);
                const r = radius * factor * (i === 4 ? 1.12 : 1) * (1 + Math.sin(state.time * 2 + i * 1.4) * .045 * moving);
                Object.assign(nodes[i].style, { left: `${x}px`, top: `${y}px`, width: `${r * 2}px`, height: `${r * 2}px` });
                return { x, y, r };
            });
            edges.forEach(([a, b], i) => {
                const p = points[a], q = points[b];
                const dx = q.x - p.x, dy = q.y - p.y, distance = Math.hypot(dx, dy);
                const nx = -dy / distance, ny = dx / distance, wa = p.r * .55, wb = q.r * .55;
                const mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
                bridges[i].setAttribute('d', `M ${p.x + nx * wa} ${p.y + ny * wa} Q ${mx} ${my} ${q.x + nx * wb} ${q.y + ny * wb} L ${q.x - nx * wb} ${q.y - ny * wb} Q ${mx} ${my} ${p.x - nx * wa} ${p.y - ny * wa} Z`);
                threads[i].setAttribute('d', `M ${p.x} ${p.y} Q ${mx + Math.sin(state.time + i) * 5} ${my} ${q.x} ${q.y}`);
            });
            signals.forEach((dot, i) => {
                dot.style.display = reduced.matches ? 'none' : '';
                const path = threads[[0, 2, 6, 8][i]];
                const progress = (state.time / (Math.PI * 2) * 3 + i * .25) % 1;
                const point = path.getPointAtLength(path.getTotalLength() * progress);
                dot.setAttribute('cx', String(point.x));
                dot.setAttribute('cy', String(point.y));
                dot.setAttribute('opacity', String(Math.sin(progress * Math.PI) * .5));
            });
        }
        function resize() {
            width = field!.clientWidth;
            height = field!.clientHeight;
            svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
            draw();
        }
        function syncMotion() {
            drift?.stop();
            pointer?.stop();
            if (reduced.matches) { state.mx = 0; state.my = 0; }
            if (!reduced.matches && visible && !document.hidden) {
                const start = state.time;
                drift = animate(state, { time: [start, start + Math.PI * 2] }, { duration: 20, repeat: Infinity, ease: 'linear', onUpdate: draw });
            }
            draw();
        }
        function move(event: PointerEvent) {
            if (event.pointerType === 'touch' || reduced.matches) return;
            const rect = field!.getBoundingClientRect();
            pointer?.stop();
            pointer = animate(state, { mx: (event.clientX - rect.left - width / 2) * .055, my: (event.clientY - rect.top - height / 2) * .055 }, { type: 'spring', stiffness: 65, damping: 22, onUpdate: draw });
        }
        function leave() {
            if (reduced.matches) return;
            pointer?.stop();
            pointer = animate(state, { mx: 0, my: 0 }, { type: 'spring', stiffness: 55, damping: 20, onUpdate: draw });
        }
        const resizeObserver = new ResizeObserver(resize);
        const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncMotion(); });
        resizeObserver.observe(field);
        visibilityObserver.observe(field);
        reduced.addEventListener('change', syncMotion);
        document.addEventListener('visibilitychange', syncMotion);
        field.addEventListener('pointermove', move);
        field.addEventListener('pointerleave', leave);
        resize();
        return () => {
            drift?.stop();
            pointer?.stop();
            resizeObserver.disconnect();
            visibilityObserver.disconnect();
            reduced.removeEventListener('change', syncMotion);
            document.removeEventListener('visibilitychange', syncMotion);
            field.removeEventListener('pointermove', move);
            field.removeEventListener('pointerleave', leave);
        };
    }, []);

    const highlighted = active ?? selected;
    return (
        <div className="hero-graph">
            <div className="organic-field" ref={fieldRef} role="group" aria-label={locale === 'es' ? 'Las conexiones de nodai' : 'The nodai network'}>
                <svg className="organic-graph" aria-hidden="true">
                    {edges.map(([a, b], i) => {
                        const hot = highlighted !== null && (a === highlighted || b === highlighted);
                        return <React.Fragment key={i}><path className={`organic-bridge${hot ? ' active' : ''}`} /><path className={`organic-thread${hot ? ' active' : ''}`} /></React.Fragment>;
                    })}
                    {[0, 1, 2, 3].map(i => <circle key={i} className="organic-signal" r={i === 0 ? 3 : 2} />)}
                </svg>
                {nodeNames[locale].map((name, i) => (
                    <button key={i} type="button" className={`organic-node${i === 4 ? ' is-nodai' : ''}${[1, 5, 6].includes(i) ? ' is-soft' : ''}`}
                        style={{ left: `${positions[i][0] * 100}%`, top: `${positions[i][1] * 100}%`, width: positions[i][2] * 2, height: positions[i][2] * 2 }}
                        aria-label={`${name}: ${locale === 'es' ? 'ver conexiones' : 'view connections'}`} aria-pressed={selected === i}
                        onPointerEnter={() => setActive(i)} onPointerLeave={() => setActive(null)} onFocus={() => setActive(i)} onBlur={() => setActive(null)} onClick={() => setSelected(i)}>
                        {i === 4 ? 'nodai' : null}
                    </button>
                ))}
                <div className={`organic-label${highlighted !== null ? ' visible' : ''}`} aria-hidden="true">{highlighted !== null ? nodeNames[locale][highlighted] : ''}</div>
            </div>
            <p className="graph-caption" aria-live="polite">{selected !== null ? descriptions[locale][selected] : locale === 'es' ? 'Cada conexión abre una nueva posibilidad.' : 'Every connection opens up a new possibility.'}</p>
        </div>
    );
}
