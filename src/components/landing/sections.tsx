import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/40 bg-white/5">Запускаем сайты с 2024</Badge>,
    title: "Создай сайт за один разговор.",
    content: "Просто опиши свою идею на русском — Юра превратит её в готовый сайт за минуты.",
    showButton: true,
    buttonText: 'Попробовать бесплатно'
  },
  {
    id: 'about',
    title: 'Почему poehali.dev?',
    content: 'Без кода, без дизайнеров, без ожиданий. Вы описываете — мы делаем.',
    cards: [
      { icon: 'Zap', title: 'Молниеносно', text: 'Сайт готов за несколько минут, а не недель' },
      { icon: 'MessageSquare', title: 'На русском', text: 'Общаетесь с ИИ как с живым разработчиком' },
      { icon: 'Sparkles', title: 'Без кода', text: 'Не нужно знать HTML, CSS или JavaScript' },
    ]
  },
  {
    id: 'features',
    title: 'Всё включено.',
    content: 'Хостинг, домен, дизайн и правки — в одном месте.',
    cards: [
      { icon: 'Globe', title: 'Публикация', text: 'Один клик — и сайт онлайн с вашим доменом' },
      { icon: 'Palette', title: 'Дизайн', text: 'Современный UI с анимациями из коробки' },
      { icon: 'Database', title: 'База данных', text: 'Формы, заявки и данные хранятся автоматически' },
    ]
  },
  {
    id: 'testimonials',
    title: 'Уже запустили.',
    content: 'Предприниматели со всей России создают свои проекты с poehali.dev.',
    cards: [
      { icon: 'Quote', title: 'Алексей, Москва', text: '«Запустил лендинг для кофейни за один вечер — клиенты пишут!»' },
      { icon: 'Quote', title: 'Мария, Краснодар', text: '«Раньше платила 50к за разработку, теперь правлю сама за 10 минут»' },
      { icon: 'Quote', title: 'Дмитрий, Екатеринбург', text: '«Три сайта для разных проектов — и всё сам, без программиста»' },
    ]
  },
  {
    id: 'join',
    title: 'Поехали?',
    content: 'Расскажите о вашем проекте — и получите готовый сайт уже сегодня.',
    showButton: true,
    buttonText: 'Начать прямо сейчас'
  },
]
