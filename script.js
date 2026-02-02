:root{
  --bg1:#070812;
  --bg2:#0e1230;
  --card:rgba(255,255,255,.06);
  --stroke:rgba(255,255,255,.13);
  --text:#f7f7ff;
  --muted:rgba(255,255,255,.70);
  --muted2:rgba(255,255,255,.55);
  --pink:#ff4fd8;
  --pink2:#ff7ae6;
  --green:#31d07f;
  --red:#ff4d6d;
  --shadow: 0 18px 80px rgba(0,0,0,.45);
  --radius: 20px;
  --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  color:var(--text);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
  background:
    radial-gradient(1200px 700px at 20% 10%, rgba(255,79,216,.22), transparent 60%),
    radial-gradient(900px 600px at 85% 10%, rgba(49,208,127,.15), transparent 55%),
    linear-gradient(160deg, var(--bg1), var(--bg2));
  overflow-x:hidden;
}

.bg-glow{
  position:fixed;
  inset:-20%;
  background:
    radial-gradient(closest-side at 30% 25%, rgba(255,79,216,.12), transparent 70%),
    radial-gradient(closest-side at 70% 35%, rgba(255,122,230,.10), transparent 70%),
    radial-gradient(closest-side at 55% 70%, rgba(49,208,127,.08), transparent 72%);
  filter: blur(30px);
  pointer-events:none;
}

.wrap{
  width:min(1100px, 100%);
  margin:0 auto;
  padding:22px 18px 40px;
}

.mono{font-family:var(--mono)}
.code{
  padding:2px 8px;
  border-radius:10px;
  background: rgba(255,255,255,.06);
  border:1px solid var(--stroke);
}
.muted{color:var(--muted)}
.tiny{font-size:12px}
.small{font-size:12px}

.topbar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:12px 14px;
  border:1px solid var(--stroke);
  border-radius:16px;
  background: rgba(0,0,0,.18);
  box-shadow: 0 10px 40px rgba(0,0,0,.25);
}

.repo{
  display:flex;
  align-items:center;
  gap:10px;
  flex-wrap:wrap;
}
.dot{
  width:10px;height:10px;border-radius:999px;
  background: linear-gradient(135deg, var(--pink), var(--green));
  box-shadow: 0 0 18px rgba(255,79,216,.4);
}
.repo-name{font-weight:900}
.tag{
  font-size:12px;
  padding:4px 8px;
  border-radius:999px;
  border:1px solid var(--stroke);
  color:var(--muted);
}

.top-actions{display:flex; gap:10px; align-items:center}

.ghost{
  border:1px solid var(--stroke);
  background: rgba(255,255,255,.04);
  color:var(--text);
  padding:10px 12px;
  border-radius:14px;
  cursor:pointer;
  text-decoration:none;
  font-weight:800;
  transition: transform .12s ease, filter .12s ease;
}
.ghost:hover{filter:brightness(1.08)}
.ghost:active{transform: translateY(1px)}

.hero{
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap:18px;
  margin-top:16px;
}

.hero-left, .hero-right{
  border:1px solid var(--stroke);
  background: rgba(255,255,255,.05);
  border-radius:var(--radius);
  box-shadow: var(--shadow);
}

.hero-left{padding:22px}
.hero-right{padding:14px; display:flex; flex-direction:column; gap:14px}

.pr-pill{
  display:flex;
  gap:10px;
  align-items:center;
  width:fit-content;
  padding:8px 12px;
  border-radius:999px;
  border:1px solid var(--stroke);
  background: rgba(0,0,0,.18);
  margin-bottom:12px;
}
.pr-status{
  padding:4px 10px;
  border-radius:999px;
  border:1px solid var(--stroke);
  color:var(--pink2);
  background: rgba(255,79,216,.10);
  font-weight:900;
}

.title{
  margin:0;
  font-size: clamp(30px, 4.1vw, 52px);
  line-height:1.05;
  letter-spacing:-.4px;
}

.subtitle{
  margin:12px 0 0;
  color:var(--muted);
  line-height:1.5;
}

.quick-info{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:12px;
  margin-top:16px;
}
.info-card{
  border:1px solid var(--stroke);
  border-radius:16px;
  padding:12px;
  background: rgba(0,0,0,.16);
}
.info-label{
  color:var(--muted2);
  font-size:12px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.6px;
}
.info-value{margin-top:8px; font-weight:800}

.actions{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin-top:16px;
}

.btn{
  appearance:none;
  border:none;
  padding:14px 16px;
  border-radius:16px;
  font-weight:900;
  cursor:pointer;
  transition: transform .12s ease, filter .12s ease;
}
.btn:hover{filter:brightness(1.06)}
.btn:active{transform: translateY(1px)}

.yes{
  background: linear-gradient(135deg, var(--pink), var(--pink2));
  color:#160414;
}
.no{
  background: linear-gradient(135deg, #ff4d6d, #ff99ac);
  color:#1b060a;
}

.ghost2{
  border:1px solid var(--stroke);
  background: rgba(255,255,255,.04);
  color:var(--text);
}

.status-line{
  margin-top:14px;
  padding:10px 12px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.10);
  background: rgba(0,0,0,.14);
  color:rgba(255,255,255,.78);
}
.ok{color:var(--green)}
.warn{color:var(--pink2)}
.sep{padding:0 10px; color:rgba(255,255,255,.35)}

.cover{
  position:relative;
  border-radius:18px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(0,0,0,.18);
  min-height: 320px;
}
.cover img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  transform: scale(1.03);
  filter: saturate(1.05) contrast(1.03);
}
.cover-overlay{
  position:absolute;
  inset:auto 0 0 0;
  padding:14px 14px 12px;
  background: linear-gradient(to top, rgba(0,0,0,.70), rgba(0,0,0,0));
}
.cover-title{font-weight:1000; font-size:16px}
.cover-sub{color:rgba(255,255,255,.75); margin-top:6px}

.mini-panel{
  border:1px solid var(--stroke);
  border-radius:18px;
  padding:14px;
  background: rgba(0,0,0,.16);
}
.mini-title{font-weight:1000; margin-bottom:10px}
.checklist{margin:0; padding-left:18px}
.checklist li{margin:7px 0; color:rgba(255,255,255,.85); font-weight:700}

.section{
  margin-top:18px;
  border:1px solid var(--stroke);
  border-radius:var(--radius);
  background: rgba(255,255,255,.05);
  box-shadow: var(--shadow);
  padding:18px;
}
.section-head{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:12px;
  flex-wrap:wrap;
  margin-bottom:12px;
}
.section-head h2{margin:0}
.section-head p{margin:0}

.gallery{
  display:grid;
  grid-template-columns: 44px 1fr 44px;
  align-items:center;
  gap:12px;
}

.frame{
  position:relative;
  border-radius:18px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(0,0,0,.18);
  min-height: 360px;
}
.frame img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  transform: scale(1.01);
  transition: opacity .25s ease;
}
.caption{
  position:absolute;
  inset:auto 0 0 0;
  padding:14px;
  background: linear-gradient(to top, rgba(0,0,0,.68), rgba(0,0,0,0));
}
.caption-title{font-weight:1000}
.caption-sub{margin-top:6px; color:rgba(255,255,255,.75)}

.nav{
  width:44px;height:44px;
  border-radius:14px;
  border:1px solid var(--stroke);
  background: rgba(255,255,255,.05);
  color:var(--text);
  cursor:pointer;
  font-size:26px;
  font-weight:900;
  transition: transform .12s ease, filter .12s ease;
}
.nav:hover{filter:brightness(1.08)}
.nav:active{transform: translateY(1px)}

.dots{
  display:flex;
  gap:8px;
  justify-content:center;
  margin-top:12px;
}
.dots button{
  width:10px;height:10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.25);
  background: rgba(255,255,255,.20);
  cursor:pointer;
}
.dots button.active{
  background: linear-gradient(135deg, var(--pink), var(--pink2));
  border-color: rgba(255,255,255,.55);
}

.timeline{
  display:grid;
  gap:12px;
}
.event{
  display:flex;
  gap:12px;
  padding:12px;
  border-radius:18px;
  border:1px solid rgba(255,255,255,.12);
  background: rgba(0,0,0,.16);
}
.event .badge{
  width:62px;
  height:30px;
  display:grid;
  place-items:center;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.06);
  font-weight:1000;
  font-family:var(--mono);
  font-size:12px;
  color:rgba(255,255,255,.85);
}
.event-title{font-weight:1000}
.event-sub{margin-top:6px}

.footer{
  margin-top:18px;
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:12px;
  padding:14px 2px 0;
}
.footer a{color:var(--muted); text-decoration:none}
.footer a:hover{text-decoration:underline}

/* Modal */
.modal{
  position:fixed;
  inset:0;
  display:none;
  place-items:center;
  background: rgba(0,0,0,.55);
  padding:18px;
  z-index:50;
}
.modal.show{display:grid}
.modal-card{
  width:min(760px, 100%);
  border-radius:22px;
  border:1px solid rgba(255,255,255,.14);
  background:
    radial-gradient(900px 350px at 20% 0%, rgba(255,79,216,.18), transparent 60%),
    rgba(10,10,20,.88);
  box-shadow: 0 20px 90px rgba(0,0,0,.55);
  padding:18px;
}
.modal-head{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:12px;
}
.modal-head h3{margin:4px 0 0; font-size:22px}
.close{
  border:1px solid rgba(255,255,255,.14);
  background: rgba(255,255,255,.06);
  color:var(--text);
  width:44px;height:44px;
  border-radius:14px;
  cursor:pointer;
  font-size:18px;
  font-weight:900;
}
.modal-body{
  margin-top:14px;
  line-height:1.65;
  color:rgba(255,255,255,.86);
}
.modal-actions{
  display:flex;
  gap:10px;
  justify-content:flex-end;
  flex-wrap:wrap;
  margin-top:14px;
}

/* Confetti */
.confetti{
  pointer-events:none;
  position:fixed;
  inset:0;
  overflow:hidden;
  z-index:60;
}
.confetti span{
  position:absolute;
  top:-10vh;
  width:10px;
  height:18px;
  border-radius:4px;
  opacity:.95;
  transform: rotate(12deg);
  animation: fall 2.1s linear forwards;
}
@keyframes fall{
  to{ transform: translateY(120vh) rotate(520deg); }
}

/* Responsive */
@media (max-width: 980px){
  .hero{grid-template-columns:1fr}
  .quick-info{grid-template-columns:1fr}
  .cover{min-height:260px}
  .frame{min-height:280px}
}
