import React, { Component } from "react";
// import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import accImg from "../../public/money.png";
import megaphn from "../../public/megaphone.png"
import vector from "../../public/vector.png"
import coding from "../../public/coding.png"
import research from "../../public/research.png"
import boost from "../../public/boost.png"
import support from "../../public/support.png"
import first from "../../public/first.png"
import car from "../../public/car.png"

class Joblist extends Component {
  render() {
    return (
      <div className=" mt-[5px]">
        <div className="w-full  mx-auto p-4">
          <h2 className="text-2xl font-bold text-black text-center">
            Popular Job Categories
          </h2>
          <p className="text-lg text-black text-center">
            2020 jobs live – 293 added today.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 grid-rows-3 w-[1050px] md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl p-4">
            <div className="flex bg-white p-4 border rounded shadow group">
              <div className=" flex p-3 w-[50px] h-[50px] justify-center bg-slate-200 group-hover:bg-button-clr rounded-xl transition duration-300">
                <img
                  src={accImg}
                  alt="accImage"
                  className="w-[25px] h-[25px] filter group-hover:invert group-hover:brightness-250 transition duration-300"
                />
              </div>
              <div className="ml-3">
                <h5 className="text-sm font-bold group-hover:text-button-clr">Accounting / Finance</h5>
                <p className="text-sm">(1 open position)</p>
              </div>
            </div>
            <div className="flex bg-white p-4 border rounded shadow group">
            <div className=" flex p-3 w-[50px] h-[50px] justify-center bg-slate-200 group-hover:bg-button-clr rounded-xl transition duration-300">
                <img
                  src={megaphn}
                  alt="megaphnImage"
                  className="w-[25px] h-[25px] filter group-hover:invert group-hover:brightness-250 transition duration-300"
                />
              </div>
              <div className="ml-3">
                <h5 className="text-sm font-bold group-hover:text-button-clr">Marketing</h5>
                <p className="text-sm">(1 open position)</p>
              </div>
            </div>
            <div className="flex bg-white p-4 border rounded shadow group">
            <div className=" flex p-3 w-[50px] h-[50px] justify-center bg-slate-200 group-hover:bg-button-clr rounded-xl transition duration-300">
                <img
                  src={vector}
                  alt="vectorImage"
                  className="w-[25px] h-[25px] filter group-hover:invert group-hover:brightness-250 transition duration-300"
                />
              </div>
              <div className="ml-3">
                <h5 className="text-sm font-bold group-hover:text-button-clr">Design</h5>
                <p className="text-sm">(1 open position)</p>
              </div>
            </div>
            <div className="flex bg-white p-4 border rounded shadow group">
            <div className=" flex p-3 w-[50px] h-[50px] justify-center bg-slate-200 group-hover:bg-button-clr rounded-xl transition duration-300">
                <img
                  src={coding}
                  alt="codingImage"
                  className="w-[25px] h-[25px] filter group-hover:invert group-hover:brightness-250 transition duration-300"
                />
              </div>
              <div className="ml-3">
                <h5 className="text-sm font-bold group-hover:text-button-clr">Development</h5>
                <p className="text-sm">(1 open position)</p>
              </div>
            </div>
            <div className="flex bg-white p-4 border rounded shadow group">
            <div className=" flex p-3 w-[50px] h-[50px] justify-center bg-slate-200 group-hover:bg-button-clr rounded-xl transition duration-300">
                <img
                  src={research}
                  alt="hrImage"
                  className="w-[25px] h-[25px] filter group-hover:invert group-hover:brightness-250 transition duration-300"
                />
              </div>
              <div className="ml-3">
                <h5 className="text-sm font-bold group-hover:text-button-clr">Human Resource</h5>
                <p className="text-sm">(1 open position)</p>
              </div>
            </div>
            <div className="flex bg-white p-4 border rounded shadow group">
            <div className=" flex p-3 w-[50px] h-[50px] justify-center bg-slate-200 group-hover:bg-button-clr rounded-xl transition duration-300">
                <img
                  src={boost}
                  alt="pmImage"
                  className="w-[25px] h-[25px] filter group-hover:invert group-hover:brightness-250 transition duration-300"
                />
              </div>
              <div className="ml-3">
                <h5 className="text-sm font-bold group-hover:text-button-clr">Project Management</h5>
                <p className="text-sm">(1 open position)</p>
              </div>
            </div>
            <div className="flex bg-white p-4 border rounded shadow group">
            <div className=" flex p-3 w-[50px] h-[50px] justify-center bg-slate-200 group-hover:bg-button-clr rounded-xl transition duration-300">
                <img
                  src={support}
                  alt="supportImage"
                  className="w-[25px] h-[25px] filter group-hover:invert group-hover:brightness-250 transition duration-300"
                />
              </div>
              <div className="ml-3">
                <h5 className="text-sm font-bold group-hover:text-button-clr">Customer Service</h5>
                <p className="text-sm">(1 open position)</p>
              </div>
            </div>
            <div className="flex bg-white p-4 border rounded shadow group">
            <div className=" flex p-3 w-[50px] h-[50px] justify-center bg-slate-200 group-hover:bg-button-clr rounded-xl transition duration-300">
                <img
                  src={first}
                  alt="supportImage"
                  className="w-[25px] h-[25px] filter group-hover:invert group-hover:brightness-250 transition duration-300"
                />
              </div>
              <div className="ml-3">
                <h5 className="text-sm font-bold group-hover:text-button-clr">Health and Care</h5>
                <p className="text-sm">(1 open position)</p>
              </div>
            </div>
            <div className="flex bg-white p-4 border rounded shadow group">
            <div className=" flex p-3 w-[50px] h-[50px] justify-center bg-slate-200 group-hover:bg-button-clr rounded-xl transition duration-300">
                <img
                  src={car}
                  alt="supportImage"
                  className="w-[25px] h-[25px] filter group-hover:invert group-hover:brightness-250 transition duration-300"
                />
              </div>
              <div className="ml-3">
                <h5 className="text-sm font-bold group-hover:text-button-clr">Automotive JOb</h5>
                <p className="text-sm">(1 open position)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Joblist;
