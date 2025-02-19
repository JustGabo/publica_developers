import Header from "./components/header";
import Main from "./components/main";
export default function Home() {
  return (
    <div className="  flex flex-col gap-16 bg-neutral-900">
      <div className="fixed w-[100%]">
        <Header />
      </div>
      <div className="w-full py-5 px-10 mt-[100px]">
        <Main />
      </div>
    </div>
  );
}
