
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F2]">
      {/* Header */}
      <header className="bg-[#5E5E5E] text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ЗооПсихолог</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-[#E6D2B5] transition-colors">О себе</a>
            <a href="#services" className="hover:text-[#E6D2B5] transition-colors">Услуги</a>
            <a href="#videos" className="hover:text-[#E6D2B5] transition-colors">Видео</a>
            <a href="#contact" className="hover:text-[#E6D2B5] transition-colors">Контакты</a>
          </nav>
          <Button className="md:hidden" variant="ghost">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-[#E6D2B5] text-[#3C3C3C]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Зоопсихология с любовью к животным</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Помогаю понять поведение вашего питомца и решить проблемы в общении
          </p>
          <Button className="bg-[#8B5A2B] hover:bg-[#6B4423] text-white px-8 py-6 text-lg rounded-md">
            Записаться на консультацию
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#5E5E5E]">О себе</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Давыдова Анастасия" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 text-[#8B5A2B]">Давыдова Анастасия</h3>
              <p className="text-lg mb-4">
                Сертифицированный зоопсихолог с многолетним опытом работы с домашними животными. Моя задача — помочь вам наладить взаимопонимание с вашим питомцем и создать гармоничные отношения.
              </p>
              <p className="text-lg mb-4">
                В своей практике я использую научно обоснованные методы коррекции поведения, основанные на принципах позитивного подкрепления и понимании естественных потребностей животных.
              </p>
              <p className="text-lg">
                Регулярно повышаю квалификацию, участвую в международных конференциях и семинарах по поведению животных.
              </p>
              
              <div className="mt-6 flex space-x-4">
                <a 
                  href="https://instagram.com/zoopsycholog" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-[#8B5A2B] hover:text-[#6B4423] transition-colors"
                >
                  <Icon name="Instagram" className="h-5 w-5 mr-2" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://vk.com/zoopsycholog" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-[#8B5A2B] hover:text-[#6B4423] transition-colors"
                >
                  <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                  <span>ВКонтакте</span>
                </a>
                <a 
                  href="https://t.me/zoopsycholog" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-[#8B5A2B] hover:text-[#6B4423] transition-colors"
                >
                  <Icon name="Send" className="h-5 w-5 mr-2" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#F8F5F2]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#5E5E5E]">Услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <Icon name="PawPrint" className="h-12 w-12 text-[#8B5A2B] mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-[#5E5E5E]">Коррекция поведения</h3>
                <p className="text-gray-700">
                  Помощь в решении проблем с агрессией, страхами, тревожностью, метками территории и другими нежелательными формами поведения.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <Icon name="Heart" className="h-12 w-12 text-[#8B5A2B] mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-[#5E5E5E]">Адаптация питомца</h3>
                <p className="text-gray-700">
                  Помощь в адаптации нового животного к дому, а также при переездах, появлении новых членов семьи или других питомцев.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <Icon name="School" className="h-12 w-12 text-[#8B5A2B] mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-[#5E5E5E]">Обучение и консультации</h3>
                <p className="text-gray-700">
                  Индивидуальные и групповые консультации по вопросам воспитания, обучения и социализации животных.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#5E5E5E]">Полезные видео</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  className="w-full h-[300px] rounded-lg"
                  src="https://www.youtube.com/embed/GRZj5OErp7A" 
                  title="Как понять язык тела собаки" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-semibold text-[#5E5E5E]">Как понять язык тела собаки</h3>
              <p className="text-gray-700">
                В этом видео я рассказываю о базовых сигналах, которые собаки используют для коммуникации с нами и другими животными.
              </p>
            </div>
            
            <div className="flex flex-col space-y-4">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  className="w-full h-[300px] rounded-lg"
                  src="https://www.youtube.com/embed/PKffm2uI4dk" 
                  title="Стресс у кошек: как распознать и помочь" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-semibold text-[#5E5E5E]">Стресс у кошек: как распознать и помочь</h3>
              <p className="text-gray-700">
                Большинство владельцев не замечают признаки стресса у своих кошек. В этом видео я объясняю, на что обратить внимание и какие меры предпринять.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.youtube.com/channel/UCzooopsycholog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#8B5A2B] hover:text-[#6B4423] text-lg font-medium"
            >
              <Icon name="Youtube" className="h-6 w-6 mr-2" />
              Больше видео на моем YouTube канале
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#4F7942] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white bg-opacity-10 backdrop-blur-sm border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "Анастасия помогла нам справиться с агрессией нашей собаки. После нескольких консультаций и выполнения всех рекомендаций мы заметили значительные улучшения. Теперь наш пес спокойно реагирует на других собак на прогулке."
                </p>
                <p className="font-semibold">— Ольга и Джек (бигль)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white bg-opacity-10 backdrop-blur-sm border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "Мой кот стал метить территорию после появления второго питомца в доме. Анастасия объяснила причины такого поведения и предложила план действий. Следуя ее советам, нам удалось наладить отношения между животными."
                </p>
                <p className="font-semibold">— Михаил и Барсик (шотландский вислоухий)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#5E5E5E]">Контакты</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" className="h-6 w-6 text-[#8B5A2B]" />
                <p className="text-lg">г. Оренбург</p>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Phone" className="h-6 w-6 text-[#8B5A2B]" />
                <p className="text-lg">+7 (XXX) XXX-XX-XX</p>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Mail" className="h-6 w-6 text-[#8B5A2B]" />
                <p className="text-lg">info@zoopsycholog.ru</p>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Clock" className="h-6 w-6 text-[#8B5A2B]" />
                <p className="text-lg">Пн-Пт: 10:00 - 19:00, Сб: 10:00 - 15:00</p>
              </div>
              
              <div className="pt-4 flex space-x-6">
                <a 
                  href="https://instagram.com/zoopsycholog" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8B5A2B] hover:text-[#6B4423] transition-colors"
                  aria-label="Instagram"
                >
                  <Icon name="Instagram" className="h-8 w-8" />
                </a>
                <a 
                  href="https://vk.com/zoopsycholog" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8B5A2B] hover:text-[#6B4423] transition-colors"
                  aria-label="ВКонтакте"
                >
                  <Icon name="MessageCircle" className="h-8 w-8" />
                </a>
                <a 
                  href="https://facebook.com/zoopsycholog" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8B5A2B] hover:text-[#6B4423] transition-colors"
                  aria-label="Facebook"
                >
                  <Icon name="Facebook" className="h-8 w-8" />
                </a>
                <a 
                  href="https://youtube.com/channel/UCzooopsycholog" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8B5A2B] hover:text-[#6B4423] transition-colors"
                  aria-label="YouTube"
                >
                  <Icon name="Youtube" className="h-8 w-8" />
                </a>
                <a 
                  href="https://t.me/zoopsycholog" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8B5A2B] hover:text-[#6B4423] transition-colors"
                  aria-label="Telegram"
                >
                  <Icon name="Send" className="h-8 w-8" />
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 text-[#5E5E5E]">Свяжитесь со мной</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Имя"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Тема"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                />
                <textarea
                  placeholder="Сообщение"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                ></textarea>
                <Button className="bg-[#8B5A2B] hover:bg-[#6B4423] text-white w-full py-2 rounded-md">
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5E5E5E] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">ЗооПсихолог</h3>
              <p>Давыдова Анастасия</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/zoopsycholog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#E6D2B5] transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" className="h-6 w-6" />
              </a>
              <a 
                href="https://vk.com/zoopsycholog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#E6D2B5] transition-colors"
                aria-label="ВКонтакте"
              >
                <Icon name="MessageCircle" className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/zoopsycholog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#E6D2B5] transition-colors"
                aria-label="Facebook"
              >
                <Icon name="Facebook" className="h-6 w-6" />
              </a>
              <a 
                href="https://t.me/zoopsycholog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#E6D2B5] transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p>© 2025 ЗооПсихолог. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
