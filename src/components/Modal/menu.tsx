export const Menu = () => {
  return (
    <div>
      <ul className="flex">
        <li className="leading-none py-1 pt-2 px-4 hover:bg-blue-500 hover:text-white transition-colors">
          <u>F</u>ile
        </li>
        <li className="leading-none py-1 pt-2 px-4 hover:bg-blue-500 hover:text-white transition-colors">
          <u>E</u>dit
        </li>
        <li className="leading-none py-1 pt-2 px-4 hover:bg-blue-500 hover:text-white transition-colors">
          For<u>m</u>at
        </li>
        <li className="leading-none py-1 pt-2 px-4 hover:bg-blue-500 hover:text-white transition-colors">
          <u>H</u>elp
        </li>
      </ul>
    </div>
  );
};
