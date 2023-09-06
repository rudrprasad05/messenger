import Image from "@/node_modules/next/image";
import AuthForm from "./components/AuthForm";



export default function Home() {
    return (
      <>
        <div className='flex flex-col justify-center bg-gray-100 items-center min-h-full min-w-1/2'>
          <div className="w-1/3">
            <Image
              alt="messenger logo"
              height={48}
              width={48}
              className={"mx-auto "}
              src={'/images/logo.png'}  
            />
            <h1 className="text-xl font-bold text-center my-5">
              Sign-In to your account
            </h1>
            <AuthForm/>
          </div>
        </div>
      </>
    )
  }
  