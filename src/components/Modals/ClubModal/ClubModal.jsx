import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const ClubModal = ({ klub, open = false, setOpen }) => {
  if (!klub) return;

  const removeNewSpace = (text) => {
    return text.replace("{/n}", " ");
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 relative h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white px-4 pb-4 pt-5 shadow-xl transition-all w-4/5 h-3/4 ">
                <div className="mt-3 text-center sm:mt-5 flex flex-col gap-7 h-full">
                  <Dialog.Title
                    as="h3"
                    className="text-base font-semibold leading-6 text-gray-900 "
                  >
                    <h3>- {removeNewSpace(klub.name)} -</h3>
                  </Dialog.Title>
                  <div className="flex gap-8 relative overflow-hidden mb-10">
                    {/* Left half with rectangle picture */}
                    <div className="w-1/2 h-3/4 mt-1">
                      <img
                        src={klub.thumbnail}
                        alt={removeNewSpace(klub.name)}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Right half with scrollable text */}
                    <div className="w-1/2 overflow-y-auto h-full">
                      <p
                        className="mb-10"
                        dangerouslySetInnerHTML={{ __html: klub.description }}
                      />
                    </div>
                  </div>

                  {/* 
                    <div>
                        <img src={klub.thumbnail} />
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        <div dangerouslySetInnerHTML={{ __html: klub.description }} />
                      </p>
                    </div> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
