"use client";

import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  SignalLow,
  SignalMedium,
  SignalHigh,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multiselector";
import { useState } from "react";

export default function Dashboard() {
  const [genres, setGenres] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <div className="grid h-screen w-full pl-[56px]">
      {/* SIDE BAR */}
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <div className="border-b p-2">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-5 fill-foreground" />
          </Button>
        </div>
        <nav className="grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg bg-muted"
                  aria-label="Success Predictor"
                >
                  <SquareTerminal className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Success Predictor
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Models"
                >
                  <Bot className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Models
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="API"
                >
                  <Code2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                API
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Documentation"
                >
                  <Book className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Documentation
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Settings"
                >
                  <Settings2 className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Settings
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto grid gap-1 p-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Help"
                >
                  <LifeBuoy className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Help
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Account"
                >
                  <SquareUser className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Account
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col">
        {/* HEADER */}
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Success Predictor</h1>
          {/* DRAWER (Content but for mobile screens) */}
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Settings className="size-4" />
                <span className="sr-only">Global Game Settings</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="max-h-[80vh]">
              <DrawerHeader>
                <DrawerTitle>Configuration</DrawerTitle>
                <DrawerDescription>
                  Configure the settings for the game.
                </DrawerDescription>
              </DrawerHeader>
              <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Global Settings
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="nb_reviews">Number of Reviews</Label>
                    <Select>
                      <SelectTrigger
                        id="nb_reviews"
                        className="items-start [&_[data-description]]:hidden"
                      >
                        <SelectValue placeholder="Select a number of reviews" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="known">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <SignalLow className="size-5" />
                            <div className="grid gap-0.5">
                              <span className="font-medium text-foreground">
                                Known
                              </span>
                              <p className="text-xs" data-description>
                                (=0.1) People know about the game but few people
                                left reviews.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="talked_about">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <SignalMedium className="size-5" />
                            <div className="grid gap-0.5">
                              <span className="font-medium text-foreground">
                                Talked about
                              </span>
                              <p className="text-xs" data-description>
                                (=0.5) Your game is talked about and has a lot
                                of reviews.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="unavoidable">
                          <div className="flex items-start gap-3 text-muted-foreground">
                            <SignalHigh className="size-5" />
                            <div className="grid gap-0.5">
                              <span className="font-medium text-foreground">
                                Unavoidable
                              </span>
                              <p className="text-xs" data-description>
                                (=1) Your game is in everyone's mouth and has a
                                lot of reviews.
                              </p>
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="items-top flex space-x-2">
                    <Checkbox id="age_rating" />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="age_rating"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Has age rating
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        If the game is rated for a specific age group (not
                        necessarily "mature").
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="price">Price (€)</Label>
                    <Input id="price" type="number" placeholder="60" />
                  </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Compatibility
                  </legend>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="windows" />
                    <Label
                      htmlFor="windows"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Windows
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="macos" />
                    <Label
                      htmlFor="macos"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      macOS
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="linux" />
                    <Label
                      htmlFor="linux"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Linux
                    </Label>
                  </div>
                </fieldset>

                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Game style
                  </legend>
                  <div className="grid gap-3">
                    <Label>Genres</Label>
                    <MultiSelector
                      values={genres}
                      onValuesChange={setGenres}
                      loop
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select the genres" />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          <MultiSelectorItem value={"Action"}>
                            Action
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Adventure"}>
                            Adventure
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Casual"}>
                            Casual
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Free to Play"}>
                            Free to Play
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Massively Multiplayer"}>
                            Massively Multiplayer
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"RPG"}>
                            RPG
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Racing"}>
                            Racing
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Simulation"}>
                            Simulation
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Sports"}>
                            Sports
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Strategy"}>
                            Strategy
                          </MultiSelectorItem>
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </div>
                  <div className="grid gap-3">
                    <Label>Categories</Label>
                    <MultiSelector
                      values={categories}
                      onValuesChange={setCategories}
                      loop
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select the categories" />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          <MultiSelectorItem
                            value={"Cross-Platform Multiplayer"}
                          >
                            Cross-Platform Multiplayer
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Family Sharing"}>
                            Family Sharing
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"In-App Purchases"}>
                            In-App Purchases
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Includes level editor"}>
                            Includes level editor
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Online Co-op"}>
                            Online Co-op
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Online PvP"}>
                            Online PvP
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Profile Features Limited"}>
                            Profile Features Limited
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Remote Play Together"}>
                            Remote Play Together
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Remote Play on TV"}>
                            Remote Play on TV
                          </MultiSelectorItem>
                          <MultiSelectorItem
                            value={"Shared/Split Screen Co-op"}
                          >
                            Shared/Split Screen Co-op
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Shared/Split Screen PvP"}>
                            Shared/Split Screen PvP
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Single-player"}>
                            Single-player
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Stats"}>
                            Stats
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Steam Achievements"}>
                            Steam Achievements
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Steam Cloud"}>
                            Steam Cloud
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Steam Leaderboards"}>
                            Steam Leaderboards
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Steam Trading Cards"}>
                            Steam Trading Cards
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"Steam Workshop"}>
                            Steam Workshop
                          </MultiSelectorItem>
                          <MultiSelectorItem
                            value={"Steam is learning about this game"}
                          >
                            Steam is learning about this game
                          </MultiSelectorItem>
                          <MultiSelectorItem
                            value={"Tracked Controller Support"}
                          >
                            Tracked Controller Support
                          </MultiSelectorItem>
                          <MultiSelectorItem value={"VR Only"}>
                            VR Only
                          </MultiSelectorItem>
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </div>
                </fieldset>
              </form>
            </DrawerContent>
          </Drawer>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Share className="size-3.5" />
            Share
          </Button>
        </header>

        {/* MAIN */}
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="relative hidden flex-col items-start gap-8 md:flex"
            x-chunk="dashboard-03-chunk-0"
          >
            <form className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Global Settings
                </legend>
                <div className="grid gap-3">
                  <Label htmlFor="nb_reviews">Number of Reviews</Label>
                  <Select>
                    <SelectTrigger
                      id="nb_reviews"
                      className="items-start [&_[data-description]]:hidden"
                    >
                      <SelectValue placeholder="Select a number of reviews" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="known">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <SignalLow className="size-5" />
                          <div className="grid gap-0.5">
                            <span className="font-medium text-foreground">
                              Known
                            </span>
                            <p className="text-xs" data-description>
                              (=0.1) People know about the game but few people
                              left reviews.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="talked_about">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <SignalMedium className="size-5" />
                          <div className="grid gap-0.5">
                            <span className="font-medium text-foreground">
                              Talked about
                            </span>
                            <p className="text-xs" data-description>
                              (=0.5) Your game is talked about and has a lot of
                              reviews.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="unavoidable">
                        <div className="flex items-start gap-3 text-muted-foreground">
                          <SignalHigh className="size-5" />
                          <div className="grid gap-0.5">
                            <span className="font-medium text-foreground">
                              Unavoidable
                            </span>
                            <p className="text-xs" data-description>
                              (=1) Your game is in everyone's mouth and has a
                              lot of reviews.
                            </p>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="items-top flex space-x-2">
                  <Checkbox id="age_rating" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="age_rating"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Has age rating
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      If the game is rated for a specific age group (not
                      necessarily "mature").
                    </p>
                  </div>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="price">Price (€)</Label>
                  <Input id="price" type="number" placeholder="60" />
                </div>
              </fieldset>
              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Compatibility
                </legend>
                <div className="flex items-center space-x-2">
                  <Checkbox id="windows" />
                  <Label
                    htmlFor="windows"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Windows
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="macos" />
                  <Label
                    htmlFor="macos"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    macOS
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="linux" />
                  <Label
                    htmlFor="linux"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Linux
                  </Label>
                </div>
              </fieldset>

              <fieldset className="grid gap-6 rounded-lg border p-4">
                <legend className="-ml-1 px-1 text-sm font-medium">
                  Game style
                </legend>
                <div className="grid gap-3">
                  <Label>Genres</Label>
                  <MultiSelector
                    values={genres}
                    onValuesChange={setGenres}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="Select the genres" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        <MultiSelectorItem value={"Action"}>
                          Action
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Adventure"}>
                          Adventure
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Casual"}>
                          Casual
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Free to Play"}>
                          Free to Play
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Massively Multiplayer"}>
                          Massively Multiplayer
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"RPG"}>RPG</MultiSelectorItem>
                        <MultiSelectorItem value={"Racing"}>
                          Racing
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Simulation"}>
                          Simulation
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Sports"}>
                          Sports
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Strategy"}>
                          Strategy
                        </MultiSelectorItem>
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </div>
                <div className="grid gap-3">
                  <Label>Categories</Label>
                  <MultiSelector
                    values={categories}
                    onValuesChange={setCategories}
                    loop
                  >
                    <MultiSelectorTrigger>
                      <MultiSelectorInput placeholder="Select the categories" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        <MultiSelectorItem value={"Cross-Platform Multiplayer"}>
                          Cross-Platform Multiplayer
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Family Sharing"}>
                          Family Sharing
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"In-App Purchases"}>
                          In-App Purchases
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Includes level editor"}>
                          Includes level editor
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Online Co-op"}>
                          Online Co-op
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Online PvP"}>
                          Online PvP
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Profile Features Limited"}>
                          Profile Features Limited
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Remote Play Together"}>
                          Remote Play Together
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Remote Play on TV"}>
                          Remote Play on TV
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Shared/Split Screen Co-op"}>
                          Shared/Split Screen Co-op
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Shared/Split Screen PvP"}>
                          Shared/Split Screen PvP
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Single-player"}>
                          Single-player
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Stats"}>
                          Stats
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Steam Achievements"}>
                          Steam Achievements
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Steam Cloud"}>
                          Steam Cloud
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Steam Leaderboards"}>
                          Steam Leaderboards
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Steam Trading Cards"}>
                          Steam Trading Cards
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Steam Workshop"}>
                          Steam Workshop
                        </MultiSelectorItem>
                        <MultiSelectorItem
                          value={"Steam is learning about this game"}
                        >
                          Steam is learning about this game
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Tracked Controller Support"}>
                          Tracked Controller Support
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"VR Only"}>
                          VR Only
                        </MultiSelectorItem>
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            <div className="flex-1" />
            <form
              className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
              x-chunk="dashboard-03-chunk-1"
            >
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Paperclip className="size-4" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Attach File</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Mic className="size-4" />
                        <span className="sr-only">Use Microphone</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Use Microphone</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Button type="submit" size="sm" className="ml-auto gap-1.5">
                  Send Message
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
