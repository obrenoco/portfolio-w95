import './App.css';

const currentTime = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', minute: 'numeric', hour12: true })

console.log(currentTime);


function App() {
  return (
    <div className="App h-screen">

      <footer className='flex bg-[#C0C0C0] justify-between absolute bottom-0 w-full text-black p-1 items-center'>
        <button className='h-fit border-2 border-r-black border-b-black px-4 py-1 font-bold'>Start</button>
        <div className='bg-[#b8b7b7] p-1 px-2 rounded-sm border-2 border-l-[#7f7f7f] border-t-[#7f7f7f] '>{currentTime}</div>
      </footer>
    </div>
  );
}

export default App;
