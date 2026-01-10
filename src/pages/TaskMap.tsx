import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const TaskMap = () => {
  const [selectedTask, setSelectedTask] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState("");

  const tasks = [
    {
      id: 1,
      title: "Выгул собаки в парке",
      description: "Нужно выгулять золотистого ретривера 1 час в парке возле дома",
      district: "Центральный",
      type: "Выгул животных",
      payment: 500,
      time: "14:00 - 15:00",
      date: "Сегодня",
      difficulty: "Легко",
      customerName: "Мария К.",
      customerRating: 4.9,
      distance: "0.8 км",
      position: { top: "25%", left: "45%" },
    },
    {
      id: 2,
      title: "Помощь с переездом коробок",
      description: "Помочь перенести 15 коробок с вещами на 3 этаж",
      district: "Северный",
      type: "Переезд",
      payment: 800,
      time: "10:00 - 12:00",
      date: "Завтра",
      difficulty: "Средне",
      customerName: "Дмитрий П.",
      customerRating: 4.7,
      distance: "2.3 км",
      position: { top: "15%", left: "60%" },
    },
    {
      id: 3,
      title: "Сборка компьютерного стола",
      description: "Собрать стол ИКЕА, все инструменты есть",
      district: "Западный",
      type: "Сборка мебели",
      payment: 600,
      time: "16:00 - 18:00",
      date: "Сегодня",
      difficulty: "Средне",
      customerName: "Анна В.",
      customerRating: 5.0,
      distance: "1.5 км",
      position: { top: "40%", left: "30%" },
    },
    {
      id: 4,
      title: "Уборка двора от листьев",
      description: "Убрать осенние листья с территории частного дома",
      district: "Южный",
      type: "Уборка",
      payment: 700,
      time: "09:00 - 11:00",
      date: "Завтра",
      difficulty: "Легко",
      customerName: "Сергей Н.",
      customerRating: 4.8,
      distance: "3.1 км",
      position: { top: "65%", left: "55%" },
    },
    {
      id: 5,
      title: "Покупка продуктов",
      description: "Купить список продуктов в магазине",
      district: "Центральный",
      type: "Покупки",
      payment: 400,
      time: "12:00 - 13:00",
      date: "Сегодня",
      difficulty: "Легко",
      customerName: "Ольга Л.",
      customerRating: 4.6,
      distance: "1.0 км",
      position: { top: "35%", left: "70%" },
    },
  ];

  const selectedTaskData = tasks.find(t => t.id === selectedTask);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легко": return "bg-green-500";
      case "Средне": return "bg-yellow-500";
      case "Сложно": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getTaskTypeIcon = (type: string) => {
    switch (type) {
      case "Выгул животных": return "Dog";
      case "Переезд": return "Package";
      case "Сборка мебели": return "Wrench";
      case "Уборка": return "Trash2";
      case "Покупки": return "ShoppingBag";
      default: return "Briefcase";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-green-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Icon name="Map" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold gradient-text">Карта заданий</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Icon name="Sliders" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="List" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="relative max-w-xl mx-auto">
            <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Поиск заданий по названию, типу или району..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-base"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-2 border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-green-100 via-blue-100 to-purple-100">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-600 rounded-full animate-pulse">
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <Icon name="User" size={12} />
                      Вы здесь
                    </div>
                  </div>

                  {tasks.map((task) => (
                    <button
                      key={task.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        selectedTask === task.id ? "scale-125 z-10" : "scale-100 hover:scale-110"
                      }`}
                      style={{ top: task.position.top, left: task.position.left }}
                      onClick={() => setSelectedTask(task.id)}
                    >
                      <div className="relative">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all ${
                            selectedTask === task.id
                              ? "bg-gradient-to-br from-primary to-secondary ring-4 ring-white"
                              : "bg-white border-2 border-primary"
                          }`}
                        >
                          <Icon
                            name={getTaskTypeIcon(task.type) as any}
                            size={24}
                            className={selectedTask === task.id ? "text-white" : "text-primary"}
                          />
                        </div>
                        {selectedTask === task.id && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-fade-in">
                            {task.payment / 100}
                          </div>
                        )}
                      </div>
                      {selectedTask === task.id && (
                        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap text-sm font-semibold animate-fade-in">
                          {task.title}
                        </div>
                      )}
                    </button>
                  ))}

                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-xs">Легко</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="text-xs">Средне</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-xs">Сложно</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Icon name="Briefcase" size={18} className="text-primary" />
                      <span className="text-sm font-semibold">{tasks.length} заданий</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" className="h-12">
                <Icon name="Filter" size={18} className="mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" className="h-12">
                <Icon name="DollarSign" size={18} className="mr-2" />
                По оплате
              </Button>
              <Button variant="outline" className="h-12">
                <Icon name="Clock" size={18} className="mr-2" />
                По времени
              </Button>
              <Button variant="outline" className="h-12">
                <Icon name="Navigation" size={18} className="mr-2" />
                Ближайшие
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {selectedTaskData ? (
              <Card className="shadow-xl border-2 border-primary animate-fade-in">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{selectedTaskData.title}</CardTitle>
                      <CardDescription className="text-base">{selectedTaskData.description}</CardDescription>
                    </div>
                    <Badge className={`${getDifficultyColor(selectedTaskData.difficulty)} text-white px-3 py-1`}>
                      {selectedTaskData.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      {selectedTaskData.district}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Icon name="Briefcase" size={14} />
                      {selectedTaskData.type}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Icon name="Navigation" size={14} />
                      {selectedTaskData.distance}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between py-3 px-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Оплата</p>
                      <p className="text-2xl font-bold text-primary">{selectedTaskData.payment} ₽</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-sm text-muted-foreground">{selectedTaskData.date}</p>
                      <p className="text-base font-semibold">{selectedTaskData.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                        {selectedTaskData.customerName.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{selectedTaskData.customerName}</p>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold">{selectedTaskData.customerRating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Send" size={18} className="mr-2" />
                    Откликнуться
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" size={18} />
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card className="shadow-lg">
                <CardContent className="py-12 text-center">
                  <Icon name="MousePointer" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-semibold mb-2">Выберите задание</p>
                  <p className="text-sm text-muted-foreground">
                    Нажмите на маркер на карте, чтобы увидеть детали
                  </p>
                </CardContent>
              </Card>
            )}

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Icon name="Lightbulb" size={22} />
                  Советы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-blue-600 mt-0.5" />
                  <p>Выбирайте задания ближе к вам</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-blue-600 mt-0.5" />
                  <p>Смотрите на рейтинг заказчика</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-blue-600 mt-0.5" />
                  <p>Начните с лёгких заданий</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaskMap;
