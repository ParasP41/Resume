import { useState } from "react";
import Card from './Components/Card'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
export default function App() {
  let a=document.querySelector('html')
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [mode, setMode] = useState(a.classList.contains('dark') ? 'dark' : 'light');
  const [toggleMode,setToggleMode]=useState(false)
  
  const handleExpand = () => setIsExpanded(true);
  
  const handleClose = () => {
    setIsExpanded(false);
  };

  const handlerMode = () => {
      if (mode === 'light') {
          a.classList.remove('light');
          a.classList.add('dark');
          setMode('dark');
          setToggleMode(true)
      } else if (mode === 'dark') {
          a.classList.remove('dark');
          a.classList.add('light');
          setMode('light');
          setToggleMode(false)
      }
  };
  let arr = [3]
  return (
    <>
      <div className="h-screen">
        <div className='flex justify-center items-start p-4 mt-5'>
          <div className="w-full max-w-lg bg-white dark:text-white dark:bg-gray-800 shadow-md border border-black rounded-lg p-3 relative">
            <button onClick={handlerMode}
              className="absolute top-3 right-3  text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >{
              toggleMode ? (
                  <MdLightMode onClick={handlerMode} className="w-5 h-5" />
                ) : (
                  <MdDarkMode onClick={handlerMode} className="w-5 h-5" />
                )
              }
            </button>

            {isExpanded && (
              <input
                type="text"
                placeholder="Title"
                className="w-full text-lg font-semibold outline-none mb-1 bg-transparent"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            )}

            <textarea
              placeholder="Take a note..."
              className="w-full outline-none resize-none bg-transparent"
              rows={isExpanded ? 3 : 1}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onFocus={handleExpand}
            />

            {isExpanded && (
              <div className="flex justify-end mt-2">
                <button
                  className="text-black hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-600"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full grid md:grid-cols-3 items-center">
          {arr.map((value, item) => (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4  px-8 py-2">
              <Card key={item} />
            </div>
          ))}
        </div>
      </div>
    </>

  );
}
