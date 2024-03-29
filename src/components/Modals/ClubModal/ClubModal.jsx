import React, { useEffect, useRef, useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import styles from "./ClubModal.module.scss";
import DOMPurify from "dompurify";
import Image from "next/image";

export const ClubModal = ({ klub, open = false, closeModal }) => {
  const [htmlContent, setHtmlContent] = useState("");
  const removeNewSpace = (text) => {
    return text.replaceAll("{/n}", " ");
  };

  useEffect(() => {
    if (open) {
      // Assuming the description property contains the path to the HTML file
      const htmlPath = klub.description;
      fetch(htmlPath)
        .then((response) => {
          if (response.status === 404) {
            // Set the HTML content to an empty string or handle the error as needed
            setHtmlContent("");
            console.error(`Chyba načtení dat pro klub ${klub.name}`);
            return;
          }
          return response.text();
        })
        .then((data) => {
          setHtmlContent(data);
        });
    }
  }, [klub.description, klub.name, open]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 relative h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-3xl bg-white shadow-xl transition-all sm:w-4/6 w-5/6  h-5/6 flex sm:flex-row flex-col overflow-y-auto">
                <span
                  className={`absolute right-5 top-5 cursor-pointer ${styles.crossStandAlone}`}
                  onClick={closeModal}
                ></span>
                <div
                  className={`flex-none sm:flex-1 overflow-hidden ${styles.rounded}`}
                >
                  <img
                    src={klub.thumbnail}
                    alt={removeNewSpace(klub.name)}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="bg-red flex-none sm:flex-1">
                  <h3 className="flex-1 mt-2 sm:mt-10 mx-3 sm:mx-5">
                    {removeNewSpace(klub.name)}
                  </h3>

                  <div className="relative h-full sm:h-4/6">
                    <div className="sm:mx-10 mx-4 mt-3 sm:mt-12  sm:overflow-y-auto h-full">
                      <p
                        className="mb-2 sm:mb-16"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(htmlContent, {
                            ALLOWED_ATTR: ["target", "tabindex", "href"],
                          }),
                        }}
                      />
                      {klub.logo && (
                        <div className="w-full h-auto flex justify-center items-center" >
                          <Image
                            src={klub.logo}
                            alt="Dobra-cajonva-Praha"
                            width={250}
                            height={250}
                          />
                        </div>
                      )}
                    </div>
                    <div
                      className={`hidden sm:block ${styles.gradientback}`}
                    ></div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
