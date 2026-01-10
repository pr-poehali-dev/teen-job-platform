import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const CustomerDashboard = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskType, setTaskType] = useState("");
  const [taskDistrict, setTaskDistrict] = useState("");
  const [taskPayment, setTaskPayment] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");

  const customerProfile = {
    name: "Мария Кузнецова",
    rating: 4.9,
    tasksPosted: 15,
    completedTasks: 12,
  };

  const myTasks = [
    {
      id: 1,
      title: "Выгул собаки в парке",
      type: "Выгул животных",
      status: "В процессе",
      applicants: 5,
      selectedExecutor: "Алексей С.",
      payment: 500,
      date: "Сегодня",
    },
    {
      id: 2,
      title: "Сборка книжной полки",
      type: "Сборка мебели",
      status: "Ожидает откликов",
      applicants: 3,
      payment: 600,
      date: "Завтра",
    },
    {
      id: 3,
      title: "Уборка подъезда",
      type: "Уборка",
      status: "Завершено",
      applicants: 2,
      selectedExecutor: "Дарья М.",
      payment: 400,
      date: "Вчера",
      rating: 5,
    },
  ];

  const applicants = [
    {
      name: "Иван Петров",
      age: 17,
      rating: 4.7,
      completedTasks: 18,
      distance: "1.2 км",
      responseTime: "5 мин назад",
    },
    {
      name: "Елена Сидорова",
      age: 16,
      rating: 4.9,
      completedTasks: 25,
      distance: "0.8 км",
      responseTime: "10 мин назад",
    },
    {
      name: "Максим Волков",
      age: 15,
      rating: 4.5,
      completedTasks: 12,
      distance: "2.1 км",
      responseTime: "15 мин назад",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "В процессе": return "bg-blue-500";
      case "Ожидает откликов": return "bg-yellow-500";
      case "Завершено": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const handleCreateTask = () => {
    console.log("Creating task:", {
      taskTitle,
      taskDescription,
      taskType,
      taskDistrict,
      taskPayment,
      taskDate,
      taskTime,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-orange-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Icon name="Briefcase" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Кабинет заказчика</h1>
                <p className="text-sm text-muted-foreground">Управление заданиями</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={20} />
              </Button>
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-gradient-to-br from-secondary to-primary text-white font-semibold">
                  {customerProfile.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="create" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 h-12">
            <TabsTrigger value="create" className="text-base">
              <Icon name="Plus" size={20} className="mr-2" />
              Создать
            </TabsTrigger>
            <TabsTrigger value="tasks" className="text-base">
              <Icon name="List" size={20} className="mr-2" />
              Мои задания
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-base">
              <Icon name="User" size={20} className="mr-2" />
              Профиль
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="animate-fade-in">
            <Card className="max-w-3xl mx-auto shadow-xl border-2 border-primary/20">
              <CardHeader className="bg-gradient-to-r from-secondary to-primary text-white rounded-t-xl">
                <CardTitle className="text-2xl">Создать новое задание</CardTitle>
                <CardDescription className="text-white/90">
                  Заполните форму, и подростки начнут откликаться
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-base font-semibold">
                    Название задания *
                  </Label>
                  <Input
                    id="title"
                    placeholder="Например: Выгул собаки, Помощь с переездом"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="h-12 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-semibold">
                    Описание *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Подробно опишите что нужно сделать, какие инструменты понадобятся и т.д."
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    className="min-h-32 text-base"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-base font-semibold">
                      Тип работы *
                    </Label>
                    <Select value={taskType} onValueChange={setTaskType}>
                      <SelectTrigger id="type" className="h-12">
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pet">Выгул животных</SelectItem>
                        <SelectItem value="moving">Переезд</SelectItem>
                        <SelectItem value="furniture">Сборка мебели</SelectItem>
                        <SelectItem value="cleaning">Уборка</SelectItem>
                        <SelectItem value="shopping">Покупки</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="district" className="text-base font-semibold">
                      Район *
                    </Label>
                    <Select value={taskDistrict} onValueChange={setTaskDistrict}>
                      <SelectTrigger id="district" className="h-12">
                        <SelectValue placeholder="Выберите район" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="central">Центральный</SelectItem>
                        <SelectItem value="north">Северный</SelectItem>
                        <SelectItem value="south">Южный</SelectItem>
                        <SelectItem value="west">Западный</SelectItem>
                        <SelectItem value="east">Восточный</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="payment" className="text-base font-semibold">
                      Оплата (₽) *
                    </Label>
                    <Input
                      id="payment"
                      type="number"
                      placeholder="500"
                      value={taskPayment}
                      onChange={(e) => setTaskPayment(e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-base font-semibold">
                      Дата *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={taskDate}
                      onChange={(e) => setTaskDate(e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-base font-semibold">
                      Время *
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={taskTime}
                      onChange={(e) => setTaskTime(e.target.value)}
                      className="h-12 text-base"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
                    <div className="space-y-1 text-sm text-blue-900">
                      <p className="font-semibold">Комиссия платформы: 12%</p>
                      <p>Будет удержана после успешного выполнения задания</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <Icon name="X" size={18} className="mr-2" />
                  Отменить
                </Button>
                <Button
                  className="flex-1 bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 h-12 text-base"
                  onClick={handleCreateTask}
                >
                  <Icon name="Plus" size={18} className="mr-2" />
                  Опубликовать задание
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="tasks" className="animate-fade-in space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myTasks.map((task, index) => (
                <Card
                  key={task.id}
                  className="hover-scale border-2 shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{task.title}</CardTitle>
                        <CardDescription className="text-base">{task.type}</CardDescription>
                      </div>
                      <Badge className={`${getStatusColor(task.status)} text-white px-3 py-1`}>
                        {task.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
                      <div>
                        <p className="text-sm text-muted-foreground">Оплата</p>
                        <p className="text-2xl font-bold text-primary">{task.payment} ₽</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Откликов</p>
                        <p className="text-2xl font-bold text-secondary">{task.applicants}</p>
                      </div>
                    </div>

                    {task.selectedExecutor && (
                      <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-xl">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                            {task.selectedExecutor.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Исполнитель: {task.selectedExecutor}</p>
                          {task.rating && (
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                              <span className="text-sm">Оценка: {task.rating}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={16} />
                      <span>{task.date}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="gap-3">
                    {task.status === "Ожидает откликов" && (
                      <Button className="flex-1">
                        <Icon name="Users" size={18} className="mr-2" />
                        Посмотреть отклики ({task.applicants})
                      </Button>
                    )}
                    {task.status === "В процессе" && (
                      <>
                        <Button className="flex-1">
                          <Icon name="MessageCircle" size={18} className="mr-2" />
                          Написать
                        </Button>
                        <Button variant="outline" size="icon">
                          <Icon name="Phone" size={18} />
                        </Button>
                      </>
                    )}
                    {task.status === "Завершено" && (
                      <Button variant="outline" className="flex-1">
                        <Icon name="Eye" size={18} className="mr-2" />
                        Подробнее
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>

            {myTasks.find(t => t.status === "Ожидает откликов") && (
              <Card className="max-w-3xl mx-auto shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-primary" />
                    Отклики на задание
                  </CardTitle>
                  <CardDescription>Выберите исполнителя из списка</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {applicants.map((applicant, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 hover-scale"
                    >
                      <Avatar className="w-14 h-14">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-lg font-bold">
                          {applicant.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-base">{applicant.name}, {applicant.age} лет</p>
                        <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                            <span>{applicant.rating}</span>
                          </div>
                          <span>•</span>
                          <span>{applicant.completedTasks} заданий</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Icon name="Navigation" size={14} />
                            <span>{applicant.distance}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Откликнулся: {applicant.responseTime}</p>
                      </div>
                      <Button className="bg-gradient-to-r from-primary to-secondary">
                        Выбрать
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="profile" className="animate-fade-in">
            <Card className="max-w-3xl mx-auto shadow-xl border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-secondary to-primary text-white rounded-t-xl">
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24 border-4 border-white">
                    <AvatarFallback className="text-3xl bg-white text-primary font-bold">
                      {customerProfile.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">{customerProfile.name}</CardTitle>
                    <CardDescription className="text-white/90 text-base mt-1">
                      Заказчик
                    </CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Icon name="Star" size={20} className="text-yellow-300 fill-yellow-300" />
                      <span className="text-xl font-bold">{customerProfile.rating}</span>
                      <span className="text-white/80 text-sm ml-1">рейтинг</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <Icon name="Briefcase" size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-blue-700">{customerProfile.tasksPosted}</p>
                        <p className="text-sm text-blue-600">Опубликовано заданий</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Icon name="CheckCircle" size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-700">{customerProfile.completedTasks}</p>
                        <p className="text-sm text-green-600">Завершено успешно</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Icon name="Edit" size={18} className="mr-2" />
                  Редактировать профиль
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CustomerDashboard;
