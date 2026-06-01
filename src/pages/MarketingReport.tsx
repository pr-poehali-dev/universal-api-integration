import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
})

const stats = [
  {
    icon: "HandshakeIcon",
    fallback: "Handshake",
    label: "Всего сделок",
    value: "916",
    sub: "прямых и высокомаржинальных",
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    icon: "Banknote",
    fallback: "Banknote",
    label: "Сумма сделок",
    value: "7 993 681 896 ₽",
    sub: "c вычетом бюджета: 7 753 681 896 ₽",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: "Megaphone",
    fallback: "Megaphone",
    label: "Маркетинговый бюджет",
    value: "240 000 000 ₽",
    sub: "на 2025 год",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
]

const avgStats = [
  {
    icon: "TrendingUp",
    label: "Средняя стоимость сделки",
    value: "8 726 726 ₽",
    color: "text-white",
  },
  {
    icon: "TrendingDown",
    label: "Средняя стоимость с вычетом мар. бюджета",
    value: "8 464 718 ₽",
    color: "text-neutral-300",
  },
  {
    icon: "Target",
    label: "Стоимость привлечения каждой сделки",
    value: "262 007 ₽",
    color: "text-[#FF4D00]",
    highlight: true,
  },
]

export default function MarketingReport() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF4D00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-4">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FF4D00] border border-[#FF4D00]/30 rounded-full px-4 py-1.5 bg-[#FF4D00]/10">
            <Icon name="BarChart2" size={14} />
            Маркетинговый отчёт 2025
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
        >
          Прямые сделки
          <br />
          <span className="text-neutral-500">и высокомаржинальные</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-neutral-400 text-lg mb-16 max-w-xl">
          Итоги года: ключевые показатели эффективности маркетинговых вложений и результативности продаж.
        </motion.p>

        {/* Main stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(0.3 + i * 0.1)}
              className={`rounded-2xl border ${s.border} bg-gradient-to-b ${s.color} p-6 flex flex-col gap-4 backdrop-blur-sm`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <Icon name={s.icon} fallback={s.fallback} size={20} className={s.iconColor} />
              </div>
              <div>
                <p className="text-neutral-400 text-sm mb-1">{s.label}</p>
                <p className="text-white text-2xl font-bold leading-tight">{s.value}</p>
                <p className="text-neutral-500 text-xs mt-1">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div {...fadeUp(0.6)} className="border-t border-white/10 my-10" />

        {/* Averages */}
        <motion.h2 {...fadeUp(0.65)} className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-6">
          Средние показатели
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {avgStats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(0.7 + i * 0.1)}
              className={`rounded-2xl border ${s.highlight ? "border-[#FF4D00]/40 bg-[#FF4D00]/10" : "border-white/10 bg-white/5"} p-6 flex flex-col gap-3`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${s.highlight ? "bg-[#FF4D00]/20" : "bg-white/5"}`}>
                <Icon name={s.icon} size={18} className={s.highlight ? "text-[#FF4D00]" : "text-neutral-400"} />
              </div>
              <p className="text-neutral-400 text-sm leading-snug">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          {...fadeUp(1.0)}
          className="mt-16 flex items-center gap-3 text-neutral-600 text-sm"
        >
          <Icon name="CalendarDays" size={16} />
          <span>Данные за 2025 год · Прямые и высокомаржинальные сделки</span>
        </motion.div>
      </div>
    </div>
  )
}
