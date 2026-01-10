import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSort, setSelectedSort] = useState("newest");

  const userProfile = {
    name: "Алексей Смирнов",
    age: 16,
    rating: 4.8,
    level: 7,
    progress: 65,
    completedTasks: 23,
    badges: [
      { icon: "Star", name: "Новичок", color: "bg-yellow-500" },
      { icon: "Zap", name: "Быстрый", color: "bg-orange-500" },
      { icon: "ThumbsUp", name: "Надёжный", color: "bg-blue-500" },
    ],
  };

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
      customerRating: 4.9,
      customerName: "Мария К.",
      distance: "0.8 км",
    },
    {
      id: 2,
      title: "Помощь с переездом коробок",
      description: "Помочь перенести 15 коробок с вещами на 3 этаж, лифт есть",
      district: "Северный",
      type: "Переезд",
      payment: 800,
      time: "10:00 - 12:00",
      date: "Завтра",
      difficulty: "Средне",
      customerRating: 4.7,
      customerName: "Дмитрий П.",
      distance: "2.3 км",
    },
    {
      id: 3,
      title: "Сборка компьютерного стола",
      description: "Собрать стол ИКЕА, все инструменты есть. Инструкция прилагается",
      district: "Западный",
      type: "Сборка мебели",
      payment: 600,
      time: "16:00 - 18:00",
      date: "Сегодня",
      difficulty: "Средне",
      customerRating: 5.0,
      customerName: "Анна В.",
      distance: "1.5 км",
    },
    {
      id: 4,
      title: "Уборка двора от листьев",
      description: "Убрать осенние листья с территории частного дома, грабли предоставлю",
      district: "Южный",
      type: "Уборка",
      payment: 700,
      time: "09:00 - 11:00",
      date: "Завтра",
      difficulty: "Легко",
      customerRating: 4.8,
      customerName: "Сергей Н.",
      distance: "3.1 км",
    },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (selectedDistrict !== "all" && task.district !== selectedDistrict) return false;
    if (selectedType !== "all" && task.type !== selectedType) return false;
    return true;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легко": return "bg-green-500";
      case "Средне": return "bg-yellow-500";
      case "Сложно": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Icon name="Rocket" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold gradient-text">ПодработкаPRO</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Settings" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="tasks" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12">
            <TabsTrigger value="tasks" className="text-base">
              <Icon name="Briefcase" size={20} className="mr-2" />
              Задания
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-base">
              <Icon name="User" size={20} className="mr-2" />
              Профиль
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tasks" className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Icon name="Filter" size={28} className="text-primary" />
                Фильтры заданий
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Район</label>
                  <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все районы" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все районы</SelectItem>
                      <SelectItem value="Центральный">Центральный</SelectItem>
                      <SelectItem value="Северный">Северный</SelectItem>
                      <SelectItem value="Западный">Западный</SelectItem>
                      <SelectItem value="Южный">Южный</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Тип работы</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все типы" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все типы</SelectItem>
                      <SelectItem value="Выгул животных">Выгул животных</SelectItem>
                      <SelectItem value="Переезд">Переезд</SelectItem>
                      <SelectItem value="Сборка мебели">Сборка мебели</SelectItem>
                      <SelectItem value="Уборка">Уборка</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Сортировка</label>
                  <Select value={selectedSort} onValueChange={setSelectedSort}>
                    <SelectTrigger>
                      <SelectValue placeholder="Сортировка" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Сначала новые</SelectItem>
                      <SelectItem value="payment-high">Дороже</SelectItem>
                      <SelectItem value="payment-low">Дешевле</SelectItem>
                      <SelectItem value="distance">Ближе к вам</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredTasks.map((task, index) => (
                <Card
                  key={task.id}
                  className="hover-scale border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{task.title}</CardTitle>
                        <CardDescription className="text-base">{task.description}</CardDescription>
                      </div>
                      <Badge className={`${getDifficultyColor(task.difficulty)} text-white px-3 py-1`}>
                        {task.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Icon name="MapPin" size={14} />
                        {task.district}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Icon name="Briefcase" size={14} />
                        {task.type}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Icon name="Navigation" size={14} />
                        {task.distance}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between py-3 px-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Оплата</p>
                        <p className="text-2xl font-bold text-primary">{task.payment} ₽</p>
                      </div>
                      <div className="space-y-1 text-right">
                        <p className="text-sm text-muted-foreground">{task.date}</p>
                        <p className="text-base font-semibold">{task.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                          {task.customerName.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{task.customerName}</p>
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-semibold">{task.customerRating}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                      <Icon name="Send" size={18} className="mr-2" />
                      Откликнуться
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" size={18} />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="animate-fade-in">
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-2 border-purple-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-t-xl">
                  <div className="flex items-center gap-6">
                    <Avatar className="w-24 h-24 border-4 border-white">
                      <AvatarFallback className="text-3xl bg-white text-primary font-bold">
                        {userProfile.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1">{userProfile.name}</CardTitle>
                      <CardDescription className="text-white/90 text-base">
                        {userProfile.age} лет • {userProfile.completedTasks} заданий выполнено
                      </CardDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <Icon name="Star" size={20} className="text-yellow-300 fill-yellow-300" />
                        <span className="text-xl font-bold">{userProfile.rating}</span>
                        <span className="text-white/80 text-sm ml-1">рейтинг</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="TrendingUp" size={24} className="text-primary" />
                        <span className="text-lg font-semibold">Уровень {userProfile.level}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{userProfile.progress}% до уровня {userProfile.level + 1}</span>
                    </div>
                    <Progress value={userProfile.progress} className="h-3" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Award" size={22} className="text-accent" />
                      Мои достижения
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {userProfile.badges.map((badge, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 hover-scale"
                        >
                          <div className={`w-14 h-14 ${badge.color} rounded-full flex items-center justify-center`}>
                            <Icon name={badge.icon as any} size={28} className="text-white" />
                          </div>
                          <span className="text-sm font-medium text-center">{badge.name}</span>
                        </div>
                      ))}
                      <div className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-dashed border-gray-300 hover-scale opacity-60">
                        <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                          <Icon name="Lock" size={28} className="text-gray-400" />
                        </div>
                        <span className="text-sm font-medium text-center text-gray-400">Следующий</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <Icon name="CheckCircle" size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-green-700">{userProfile.completedTasks}</p>
                          <p className="text-sm text-green-600">Выполнено заданий</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Icon name="Wallet" size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-yellow-700">{userProfile.completedTasks * 650} ₽</p>
                          <p className="text-sm text-yellow-600">Всего заработано</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Icon name="Edit" size={18} className="mr-2" />
                    Редактировать профиль
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Settings" size={18} className="mr-2" />
                    Настройки
                  </Button>
                </Button>
                </CardFooter>
              </Card>

              <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Icon name="Shield" size={24} />
                    Безопасность
                  </CardTitle>
                  <CardDescription>
                    Функции для твоей защиты во время выполнения заданий
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="destructive" className="w-full h-16 text-lg font-bold" size="lg">
                    <Icon name="AlertTriangle" size={24} className="mr-3" />
                    SOS - Экстренная кнопка
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-14">
                      <Icon name="MapPin" size={20} className="mr-2" />
                      Делюсь геолокацией
                    </Button>
                    <Button variant="outline" className="h-14">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить родителям
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
