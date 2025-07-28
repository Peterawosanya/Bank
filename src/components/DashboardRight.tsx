"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Progress } from "./ui/progress";

const DashboardRight = () => (
  <aside
    className="min-w-[280px] bg-white border-l border-gray-200 p-8 flex flex-col gap-8 h-screen sticky top-0"
  >
    {/* User Profile */}
    <div className="flex items-center gap-3 mb-6">
      <Avatar>
        <AvatarFallback>PA</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-bold text-lg text-black">Patrick</div>
        <div className="text-xs text-muted-foreground">patrick@email.com</div>
      </div>
    </div>
    {/* Bank Cards */}
    <div>
      <div className="font-semibold mb-2 text-gray-800">My Banks</div>
      <Card className="mb-4 bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Vertex Bank</CardTitle>
          <CardDescription className="text-white/80">Patrick | 06/24</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-xl tracking-widest font-mono mb-2">1234 5678 9012 3456</div>
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback>VB</AvatarFallback>
            </Avatar>
            <span className="text-sm">Visa</span>
          </div>
        </CardContent>
      </Card>
      {/* Add more cards as needed */}
    </div>
    {/* Budgets */}
    <div>
      <div className="font-semibold mb-2 text-gray-800">My Budgets</div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-blue-600">Subscriptions</span>
          <span className="text-xs text-muted-foreground">$25 left</span>
        </div>
        <Progress value={60} className="h-2 bg-blue-100" indicatorClassName="bg-blue-500" />
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-red-600">Food and booze</span>
          <span className="text-xs text-muted-foreground">$120 left</span>
        </div>
        <Progress value={80} className="h-2 bg-red-100" indicatorClassName="bg-red-500" />
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-green-600">Savings</span>
          <span className="text-xs text-muted-foreground">$50 left</span>
        </div>
        <Progress value={90} className="h-2 bg-green-100" indicatorClassName="bg-green-500" />
      </div>
    </div>
  </aside>
);

export default DashboardRight;
