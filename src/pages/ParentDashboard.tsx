import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ParentDashboard = () => {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emergencyMode, setEmergencyMode] = useState(false);

  const childProfile = {
    name: "Алексей Смирнов",
    age: 16,
    status: "Выполняет задание",
    currentTask: {
      title: "Выгул собаки в парке",
      location: "Центральный район, Парк Победы",
      startTime: "14:00",
      expectedEnd: "15:00",
      currentTime: "14:23",
      customer: "Мария К.",
      payment: 500,
      coordinates: { lat: 55.751244, lng: 37.618423 },
    },
    safetySettings: {
      allowedDistricts: ["Центральный", "Северный"],
      maxDistance: 3,
      workHours: { start: "09:00", end: "18:00" },
      blockedTaskTypes: ["Переезд тяжелых вещей"],
    },
  };

  const activityHistory = [
    { time: "14:23", event: "Геолокация обновлена", type: "location", status: "success" },
    { time: "14:15", event: "Отметил начало выполнения задания", type: "task", status: "success" },
    { time: "14:05", event: "Прибыл к месту встречи", type: "location", status: "success" },
    { time: "13:50", event: "Вышел из дома", type: "status", status: "info" },
    { time: "13:30", event: "Откликнулся на задание", type: "task", status: "info" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Выполняет задание": return "bg-green-500";
      case "В пути": return "bg-blue-500";
      case "Дома": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "location": return "MapPin";
      case "task": return "Briefcase";
      case "status": return "Activity";
      default: return "Circle";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Родительский контроль</h1>
                <p className="text-sm text-muted-foreground">Безопасность {childProfile.name}</p>
              </div>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {emergencyMode && (
              <Alert variant="destructive" className="border-2 animate-fade-in">
                <Icon name="AlertTriangle" className="h-5 w-5" />
                <AlertTitle className="text-lg font-bold">Экстренный режим активирован!</AlertTitle>
                <AlertDescription className="text-base">
                  Все контакты уведомлены. Последняя известная геолокация: {childProfile.currentTask.location}
                </AlertDescription>
              </Alert>
            )}

            <Card className="border-2 border-green-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16 border-4 border-white">
                      <AvatarFallback className="text-2xl bg-white text-green-600 font-bold">
                        {childProfile.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{childProfile.name}</CardTitle>
                      <CardDescription className="text-white/90">
                        {childProfile.age} лет
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(childProfile.status)} text-white px-4 py-2 text-base`}>
                    {childProfile.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Текущее задание</h3>
                    <Badge variant="outline" className="text-base">
                      {childProfile.currentTask.payment} ₽
                    </Badge>
                  </div>
                  <p className="text-base font-medium">{childProfile.currentTask.title}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} className="text-primary" />
                      <span>{childProfile.currentTask.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>
                        {childProfile.currentTask.startTime} - {childProfile.currentTask.expectedEnd} 
                        <span className="ml-2 font-semibold text-green-600">
                          (сейчас {childProfile.currentTask.currentTime})
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="User" size={16} className="text-primary" />
                      <span>Заказчик: {childProfile.currentTask.customer}</span>
                    </div>
                  </div>
                </div>

                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-300 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-purple-300 rounded-full blur-3xl"></div>
                  </div>
                  <div className="relative text-center space-y-3">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-pulse">
                      <Icon name="MapPin" size={40} className="text-white" />
                    </div>
                    <p className="text-lg font-semibold text-primary">Геолокация в реальном времени</p>
                    <p className="text-sm text-muted-foreground">
                      Координаты: {childProfile.currentTask.coordinates.lat.toFixed(6)}, {childProfile.currentTask.coordinates.lng.toFixed(6)}
                    </p>
                    <Button className="mt-4">
                      <Icon name="Navigation" size={18} className="mr-2" />
                      Открыть на карте
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" size={24} className="text-primary" />
                  История активности
                </CardTitle>
                <CardDescription>Все действия за сегодня</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activityHistory.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 hover-scale"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={getEventIcon(activity.type) as any} size={20} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.event}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                      <Badge variant="outline" className="flex-shrink-0">
                        {activity.status === "success" ? "✓" : "i"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <Icon name="ShieldAlert" size={24} />
                  Экстренная помощь
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant={emergencyMode ? "default" : "destructive"}
                  className="w-full h-16 text-lg font-bold"
                  onClick={() => setEmergencyMode(!emergencyMode)}
                >
                  <Icon name="AlertCircle" size={24} className="mr-3" />
                  {emergencyMode ? "Отменить сигнал" : "Экстренный вызов"}
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="h-12">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Icon name="MessageCircle" size={18} className="mr-2" />
                    Написать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Settings" size={22} className="text-primary" />
                  Настройки безопасности
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <div>
                      <p className="text-sm font-medium">Геолокация</p>
                      <p className="text-xs text-muted-foreground">Отслеживание в реальном времени</p>
                    </div>
                  </div>
                  <Switch checked={geolocationEnabled} onCheckedChange={setGeolocationEnabled} />
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                  <div className="flex items-center gap-3">
                    <Icon name="Bell" size={20} className="text-primary" />
                    <div>
                      <p className="text-sm font-medium">Уведомления</p>
                      <p className="text-xs text-muted-foreground">О каждом действии</p>
                    </div>
                  </div>
                  <Switch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
                </div>

                <div className="pt-3 space-y-2">
                  <p className="text-sm font-semibold">Разрешённые районы:</p>
                  <div className="flex flex-wrap gap-2">
                    {childProfile.safetySettings.allowedDistricts.map((district, index) => (
                      <Badge key={index} variant="secondary">
                        {district}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <p className="text-sm font-semibold">Ограничения:</p>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p>• Макс. расстояние: {childProfile.safetySettings.maxDistance} км</p>
                    <p>• Рабочие часы: {childProfile.safetySettings.workHours.start} - {childProfile.safetySettings.workHours.end}</p>
                    <p>• Запрещено: {childProfile.safetySettings.blockedTaskTypes.join(", ")}</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4">
                  <Icon name="Edit" size={18} className="mr-2" />
                  Изменить настройки
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Icon name="CheckCircle" size={22} />
                  Статистика за неделю
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Выполнено заданий:</span>
                  <span className="text-lg font-bold text-green-700">7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Средний рейтинг:</span>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-lg font-bold text-green-700">4.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Заработано:</span>
                  <span className="text-lg font-bold text-green-700">4,200 ₽</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParentDashboard;
