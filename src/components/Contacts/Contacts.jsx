import React from "react";
import Input from "../Form/Input";
import Button from "../../UI/Button";
import treeIMG from "../../assets/img/tree.png";
const Contacts = () => {
  return (
    <div className="mt-[72px] mb-[120px]">
      <div className="container px-5 xl:px-0">
        <div className="flex">
          <div className="lg:basis-1/2 basis-full flex flex-col">
            <div className="max-w-[420px] mb-10">
              <h1 className="font-primary text-purple-400 text-[35px]">
                Əlaqə
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex gap-5">
                <Input placeholder="Ad, Soyad*" />
                <Input placeholder="Mövzu" />
              </div>
              <div className="flex gap-5">
                {" "}
                <Input placeholder="E-mail*" />
                <Input placeholder="Telefon*" />
              </div>
              <textarea
                style={{
                  resize: "none",
                }}
                className="max-w-[650px] max-h-[140px] h-[140px] w-full bg-[#FAFAFA] border-[#CDCDCD] px-5 py-3 border-[1px] rounded-[20px] placeholder:font-montserrat placeholder:text-[12px] md:placeholder:text-[15px] placeholder:text-green-400 placeholder:font-medium"
                placeholder="Mesaj*"
              />
            </div>
            <Button styles="bg-green-400 self-start lg:self-end px-[51px] py-[14px] text-white border-[1px] border-green-400 hover:bg-white transition-all hover:text-green-400">
              Göndər
            </Button>
          </div>
          <div className="lg:basis-1/2 hidden lg:flex relative justify-end">
            <img className="absolute -top-28" src={treeIMG} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
