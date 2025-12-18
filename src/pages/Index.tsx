import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Быстрая разработка",
      description: "Реализуем проекты в сжатые сроки без потери качества"
    },
    {
      icon: "Sparkles",
      title: "Современный дизайн",
      description: "Используем актуальные тренды и UX-практики"
    },
    {
      icon: "Target",
      title: "Точное попадание",
      description: "Решаем бизнес-задачи, а не просто делаем красиво"
    },
    {
      icon: "Rocket",
      title: "Масштабируемость",
      description: "Готовые решения растут вместе с вашим бизнесом"
    }
  ];

  const portfolio = [
    {
      title: "E-commerce платформа",
      category: "Разработка",
      tags: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-purple-600 to-blue-500"
    },
    {
      title: "Финтех приложение",
      category: "Дизайн + Разработка",
      tags: ["UI/UX", "Mobile", "Web"],
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "CRM система",
      category: "Консалтинг",
      tags: ["Strategy", "Integration", "Analytics"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Алексей Петров",
      role: "CEO, TechStart",
      text: "Команда превзошла все ожидания. Проект запустили на 2 недели раньше срока!",
      rating: 5
    },
    {
      name: "Мария Соколова",
      role: "Product Manager, InnovateCo",
      text: "Профессиональный подход на каждом этапе. Рекомендую всем!",
      rating: 5
    },
    {
      name: "Дмитрий Иванов",
      role: "Founder, StartupHub",
      text: "Отличное качество и внимание к деталям. Будем работать дальше!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden py-20 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
              🚀 Цифровые решения нового поколения
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Создаём digital
              <br />
              <span className="gradient-text">с вау-эффектом</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Разработка, дизайн и консалтинг для бизнеса, который думает на шаг вперёд
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all hover:scale-105">
                Обсудить проект
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 glass-effect hover:bg-white/10 transition-all">
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы не просто делаем проекты — мы создаём ценность
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-scale-in border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши проекты
            </h2>
            <p className="text-xl text-muted-foreground">
              Кейсы, которыми мы гордимся
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                  <div className="absolute top-4 right-4">
                    <Icon name="ExternalLink" size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-secondary/20 text-secondary border-secondary/30">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас партнёры
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-lg font-bold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary/20 via-secondary/10 to-background">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-primary/30">
            <CardContent className="p-12 text-center">
              <Icon name="Mail" size={48} className="mx-auto mb-6 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Готовы начать?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение часа
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-6 py-4 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg" className="px-8 py-4 bg-primary hover:bg-primary/90 transition-all hover:scale-105">
                  Отправить заявку
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 justify-center text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={20} />
                  <span>hello@agency.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 md:px-8 lg:px-16 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-2">DigitalAgency</h3>
              <p className="text-muted-foreground">Создаём цифровое будущее</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
          <div className="text-center mt-8 text-muted-foreground text-sm">
            © 2024 DigitalAgency. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
