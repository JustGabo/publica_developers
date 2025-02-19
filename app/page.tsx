import Header from "./components/header";
import Main from "./components/main";
export default function Home() {
  return (
    <div className="py-5 px-10  flex flex-col gap-16 bg-neutral-900">
      <div className="fixed w-[95%]">
        <Header />
      </div>
      <div className="w-full mt-[100px]">
        <Main />
      </div>
    </div>
  );
}
