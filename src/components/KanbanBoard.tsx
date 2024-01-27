import { useMemo, useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column, Id } from "../types";
import ColumnContainer from "./ColumnContainer";
import {
  DndContext,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
  useSensor,
  PointerSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);
  const columnId = useMemo(() => columns.map((column) => column.id), [columns]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  //detached delete button from column container
  const sensor = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  return (
    <div
      className="m-auto 
    flex 
    min-h-screen 
    w-full 
    items-center 
    overflow-x-auto
    overflow-y-hidden
    px-[40px]"
    >
      <DndContext
        sensors={sensor}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <div className="m-auto flex gap-4">
          {" "}
          <SortableContext items={columnId}>
            <div className="flex gap-4">
              {columns.map((column) => (
                <div>
                  <ColumnContainer
                    key={column.id}
                    column={column}
                    deleteColumn={deleteColumn}
                    updateColumn={updateColumn}
                  />
                </div>
              ))}
            </div>{" "}
          </SortableContext>
          <button
            onClick={() => {
              createNewColumn();
            }}
            className="
          h-[60px]
          w-[350px]
          min-w-[350px]
          cursor-pointer
          rounded-lg
          bg-mainBackgroundColor
          border-2
          border-columnBackgroundColor
          p-4
          ring-rose-500
          hover:ring-2
          flex
          gap-2
          "
          >
            <PlusIcon />
            Add Column
          </button>
        </div>
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );

  function updateColumn(id: Id, title: string) {
    const newColumn = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });
  }

  function deleteColumn(id: Id) {
    const filteredColumn = columns.filter((col) => col.id !== id);
    setColumns(filteredColumn);
  }

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }
  function generateId() {
    return Math.floor(Math.random() * 10001);
  }

  function onDragStart(event: DragStartEvent) {
    console.log("DRAG START", event);
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
    }
  }
  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;
    console.log("DRAG END");

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);
      const overColumnIndex = columns.findIndex((col) => col.id === overId);
      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }
}

export default KanbanBoard;
