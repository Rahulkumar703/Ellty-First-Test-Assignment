import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import ListItem from "./components/list-item";
import Separator from "./components/separator";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "Page 1",
      checked: false,
      disabled: false,
    },
    {
      id: 2,
      title: "Page 2",
      checked: false,
      disabled: false,
    },
    {
      id: 3,
      title: "Page 3",
      checked: true,
      disabled: false,
    },
    {
      id: 4,
      title: "Page 4",
      checked: false,
      disabled: false,
    },
    {
      id: 5,
      title: "Disabled Page",
      checked: false,
      disabled: true,
    },
    {
      id: 6,
      title: "Disabled Checked Page",
      checked: true,
      disabled: true,
    },
  ]);

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setList(list.map((item) => ({ ...item, checked: e.target.checked })));
  };

  const toggleItem = (id: number, checked: boolean) => {
    setList(list.map((item) => (item.id === id ? { ...item, checked } : item)));
  };

  return (
    <main className="flex justify-center items-start min-h-svh w-full">
      <ul
        className="w-full max-w-sm rounded border border-border/10 mt-14 py-[10px] list-none"
        style={{
          boxShadow: "0 8px 15px #1414141F, 0 0 4px #1414141A",
        }}
      >
        <ListItem
          id={0}
          title={"All Pages"}
          checked={list.every((item) => item.checked)}
          onChange={toggleAll}
        />
        <Separator />
        {list.map((item) => (
          <ListItem
            id={item.id}
            key={item.id}
            title={item.title}
            checked={item.checked}
            onChange={(e) => {
              toggleItem(item.id, e.target.checked);
            }}
            disabled={item.disabled}
          />
        ))}
        <Separator />
        <div className="py-[10px] px-[15px]">
          <Button>Done</Button>
        </div>
      </ul>
    </main>
  );
}

export default App;
