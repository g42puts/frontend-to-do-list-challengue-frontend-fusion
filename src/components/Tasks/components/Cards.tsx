import { Suspense, useEffect, useState } from "react";
import { Plus, Search } from "lucide-react";

import { TaskService } from "@/services";
import { ITask } from "@/services/taskService/types";
import { Button } from "@/components/Forms/Button";
import { useAuth } from "@/hooks";
import { TaskList } from "../Tasks";
import { CreateTaskModal } from "./CreateTaskModal";

const Cards = () => {
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    TaskService.findAll()
      .then((data) => setTasks(data))
      .catch((err) => console.log('Erro fetchint Tasks: ', err))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="flex sm:flex-row flex-col items-baseline justify-between py-4 mb-4 border-b-[1px] border-white/50">
        <h2 className="text-2xl font-medium self-center">To-Do-List</h2>
        {/* Search Bar aqui */}
        <div className="relative sm:w-72 w-full">
          <input className="rounded-md p-2 w-full" />
          <Search className="absolute right-0 top-0 border-l-2 border-black size-10 p-1 text-black" />
        </div>
      </div>
      <Button onClick={() => {
        if (auth) {
          setShowCreateModal(!showCreateModal)
        } else {
          window.alert('Faça login para continuar!')
        }
      }}>
        <Plus size={20} />
      </Button>
      <Suspense fallback={<span>Loading...</span>}>
        {showCreateModal && <CreateTaskModal showModal={showCreateModal} setShowModal={setShowCreateModal} />}
      </Suspense>
      <div className="border-[1px] border-white p-4 rounded-md my-10">
        {!loading && tasks && tasks.length > 0 ? (
          <TaskList tasks={tasks} />
        ) : (
          <span className="flex flex-row justify-between items-center">
            Não existem tasks registradas, deseja adicionar mais?
            <Button onClick={() => {
              if (auth) {
                setShowCreateModal(!showCreateModal)
              } else {
                window.alert('Faça login para continuar!')
              }
            }}>
              <Plus size={20} />
            </Button>
            <Suspense fallback={<span>Loading...</span>}>
              {showCreateModal && <CreateTaskModal showModal={showCreateModal} setShowModal={setShowCreateModal} />}
            </Suspense>
          </span>
        )}
      </div>
    </div>
  )
}

export { Cards };