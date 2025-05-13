
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EC]">
      {/* Header */}
      <header className="bg-[#5E5E5E] text-white py-4 shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="PawPrint" className="h-6 w-6 text-[#E6D2B5]" />
            <h1 className="text-2xl font-bold">ЗооПсихолог</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-[#E6D2B5] transition-colors">Главная</a>
            <a href="#about" className="hover:text-[#E6D2B5] transition-colors">О себе</a>
            <a href="#services" className="hover:text-[#E6D2B5] transition-colors">Услуги</a>
            <a href="#video" className="hover:text-[#E6D2B5] transition-colors">Видео</a>
            <a href="#contact" className="hover:text-[#E6D2B5] transition-colors">Контакты</a>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" className="text-white">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 bg-[#E6D2B5] text-[#3C3C3C]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Зоопсихология с любовью к животным</h2>
            <p className="text-xl mb-8">
              Помогаю понять поведение вашего питомца и решить проблемы в общении
            </p>
            <Button className="bg-[#8B5A2B] hover:bg-[#6B4423] text-white px-8 py-6 text-lg rounded-md">
              Записаться на консультацию
            </Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Счастливый питомец" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#5E5E5E]">О себе</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
              <p className="text-lg mb-6">
                Регулярно повышаю квалификацию, участвую в международных конференциях и семинарах по поведению животных.
              </p>
              
              <div className="flex space-x-4 mt-4">
                <h4 className="text-lg font-medium mr-2">Мои соцсети:</h4>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#8B5A2B] hover:text-[#6B4423] transition-colors">
                  <Icon name="Instagram" className="h-6 w-6" />
                </a>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-[#8B5A2B] hover:text-[#6B4423] transition-colors">
                  <Icon name="MessageCircle" className="h-6 w-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#8B5A2B] hover:text-[#6B4423] transition-colors">
                  <Icon name="Facebook" className="h-6 w-6" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#8B5A2B] hover:text-[#6B4423] transition-colors">
                  <Icon name="Youtube" className="h-6 w-6" />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-[#8B5A2B] hover:text-[#6B4423] transition-colors">
                  <Icon name="Send" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#F5F2EC]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#5E5E5E]">Услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
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
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
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
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
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
      <section id="video" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#5E5E5E]">Полезные видео</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-[300px]"
                  src="https://www.youtube.com/embed/YWq-yXBoOXc" 
                  title="Понимание языка собак"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="p-4 bg-[#F5F2EC]">
                <h3 className="text-lg font-semibold text-[#5E5E5E]">Как понять язык тела собаки</h3>
                <p className="text-gray-700">Расшифровка сигналов, которые подают нам собаки через язык тела.</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-[300px]"
                  src="https://www.youtube.com/embed/K4rTfJROUpY" 
                  title="Поведение кошек" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
              <div className="p-4 bg-[#F5F2EC]">
                <h3 className="text-lg font-semibold text-[#5E5E5E]">Почему кошки себя так ведут</h3>
                <p className="text-gray-700">Объяснение странного поведения кошек с точки зрения зоопсихологии.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button className="bg-[#8B5A2B] hover:bg-[#6B4423] text-white px-6 py-2 rounded-md">
              <Icon name="Youtube" className="mr-2 h-5 w-5" />
              Больше видео на моем канале
            </Button>
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
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Ольга" 
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <p className="font-semibold">Ольга и Джек (бигль)</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white bg-opacity-10 backdrop-blur-sm border-none">
              <CardContent className="pt-6">
                <p className="italic mb-4">
                  "Мой кот стал метить территорию после появления второго питомца в доме. Анастасия объяснила причины такого поведения и предложила план действий. Следуя ее советам, нам удалось наладить отношения между животными."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Михаил" 
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <p className="font-semibold">Михаил и Барсик (шотландский вислоухий)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#5E5E5E]">Контакты</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="bg-[#F5F2EC] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6 text-[#5E5E5E]">Информация для связи</h3>
                <div className="space-y-4">
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
                </div>
                
                <Separator className="my-6" />
                
                <h3 className="text-xl font-semibold mb-4 text-[#5E5E5E]">Социальные сети</h3>
                <div className="flex space-x-5">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#8B5A2B] text-white p-3 rounded-full hover:bg-[#6B4423] transition-colors">
                    <Icon name="Instagram" className="h-6 w-6" />
                  </a>
                  <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="bg-[#8B5A2B] text-white p-3 rounded-full hover:bg-[#6B4423] transition-colors">
                    <Icon name="MessageCircle" className="h-6 w-6" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#8B5A2B] text-white p-3 rounded-full hover:bg-[#6B4423] transition-colors">
                    <Icon name="Facebook" className="h-6 w-6" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-[#8B5A2B] text-white p-3 rounded-full hover:bg-[#6B4423] transition-colors">
                    <Icon name="Youtube" className="h-6 w-6" />
                  </a>
                  <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="bg-[#8B5A2B] text-white p-3 rounded-full hover:bg-[#6B4423] transition-colors">
                    <Icon name="Send" className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 text-[#5E5E5E]">Отправить сообщение</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Ваш email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Тема сообщения"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                    <textarea
                      id="message"
                      placeholder="Ваше сообщение"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A2B] resize-none"
                    ></textarea>
                  </div>
                  <Button className="bg-[#8B5A2B] hover:bg-[#6B4423] text-white w-full py-2 rounded-md">
                    Отправить
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5E5E5E] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center gap-2">
              <Icon name="PawPrint" className="h-6 w-6 text-[#E6D2B5]" />
              <div>
                <h3 className="text-xl font-bold">ЗооПсихолог</h3>
                <p>Давыдова Анастасия</p>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
              <a href="#hero" className="hover:text-[#E6D2B5] transition-colors">Главная</a>
              <a href="#about" className="hover:text-[#E6D2B5] transition-colors">О себе</a>
              <a href="#services" className="hover:text-[#E6D2B5] transition-colors">Услуги</a>
              <a href="#video" className="hover:text-[#E6D2B5] transition-colors">Видео</a>
              <a href="#contact" className="hover:text-[#E6D2B5] transition-colors">Контакты</a>
            </nav>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6D2B5]">
                <Icon name="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6D2B5]">
                <Icon name="MessageCircle" className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6D2B5]">
                <Icon name="Facebook" className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6D2B5]">
                <Icon name="Youtube" className="h-6 w-6" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-[#E6D2B5]">
                <Icon name="Send" className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p>© {new Date().getFullYear()} ЗооПсихолог. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Кнопка наверх */}
      <a href="#hero" className="fixed bottom-6 right-6 bg-[#8B5A2B] text-white p-3 rounded-full shadow-lg hover:bg-[#6B4423] transition-colors">
        <Icon name="ArrowUp" className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
