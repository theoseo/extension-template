import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="z-infinite overflow-hidden fixed right-5 bottom-5 flex flex-col w-[calc(100%-42px)] max-w-[420px] max-h-[calc(100%-42px)] pt-7 bg-white rounded-[28px] drop-shadow-default">
      <div class="relative px-8 after:z-[1] after:absolute after:top-full after:left-0 after:w-full after:h-7 after:bg-gradient-to-b after:from-white after:to-white/0">
        <h1 class="text-3xl text-left font-bold truncate">
          Powerful Video Security Without the Complexity
        </h1>
        <button class="relative flex w-full mt-1 text-sm text-black/70 text-left">
          <svg
            class="flex-none w-4 h-4 mr-2 translate-y-[3px]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m5.4521 22h9.0957c1.7485 0 3.1822-1.3118 3.4064-3h.5936c1.9034 0 3.4522-1.5488 3.4522-3.4521v-10.0958c0-1.9033-1.5488-3.4521-3.4521-3.4521h-9.0958c-1.9033 0-3.4521 1.5488-3.4521 3.4521v.5479h-.5479c-1.9033 0-3.4521 1.5488-3.4521 3.4521v9.0957c0 1.9034 1.5488 3.4522 3.4521 3.4522zm2.5479-16.5479c0-.8007.6514-1.4521 1.4521-1.4521h9.0957c.8008 0 1.4522.6514 1.4522 1.4521v10.0957c0 .8008-.6514 1.4522-1.4521 1.4522h-.5479v-7.5479c0-1.9033-1.5488-3.4521-3.4521-3.4521h-6.5479zm-4 4c0-.8007.6514-1.4521 1.4521-1.4521h9.0957c.8008 0 1.4522.6514 1.4522 1.4521v9.0957c0 .8008-.6514 1.4522-1.4521 1.4522h-9.0958c-.8007 0-1.4521-.6514-1.4521-1.4521z"
              fill="rgb(0,0,0)"
            ></path>
          </svg>
          <span class="w-[calc(100%-24px)] truncate">
            localhost:1313/security-camera/dome-series/model-d62s
          </span>
        </button>
      </div>

      <div class="relative overflow-y-auto pt-2.5 px-8 pb-6 text-left">
        <p class="mt-2.5 text-base">
          Install Verkada cameras easily and in minutes with just a PoE
          connection. No need for added software or complex port forwarding.
        </p>
        <p class="mt-2.5 text-base">
          <strong>
            Built-in Storage.{" "}
            <a href="/" class="color-azure underline underline-offset-1">
              Store up to 365 days
            </a>{" "}
            of standard quality footage directly on the camera. No need for
            NVRs, DVRs, or servers.
          </strong>
        </p>
        <p class="mt-2.5 text-base">
          Automatic Updates Stay ahead of emerging security threats and keep
          up-to-date with the latest features. Leave ongoing maintenance in the
          past.
        </p>
        <p class="mt-2.5 text-base">
          <blockquote class="p-5 rounded-[18px] bg-azure/5 text-lg leading-6 italic">
            <strong class="font-black">
              Full Functionality With Minimal Bandwidth
            </strong>
            Verkada cameras store footage locally and send encrypted thumbnails
            to the cloud, streaming only when viewed. With bandwidth as low as
            20-50 kbps, easily scale to thousands of cameras per location.
            <div class="flex mt-2.5 text-sm">
              <span class="flex-none mr-1.5 opacity-50">-</span>
              <span>
                by <b>Consequat reprehenderit</b>, In cillum mollit Lorem ipsum
                cillum.
              </span>
            </div>
          </blockquote>
        </p>
        <p class="mt-2.5 text-base">
          Improve Visibility with Centralized Management
        </p>
        <p class="mt-2.5 text-base">
          Effortlessly manage camera fleets across multiple sites with our
          centralized Command platform. Bring all your camera feeds together in
          one place and grant secure access to your entire team, no matter where
          they are.
        </p>
        <p class="mt-2.5 text-base">
          Experience the Advantages of a Cloud-Managed Solution Gain a unified
          view of activity of events across all devices and sites. Receive
          nearly instant customized alerts for offline cameras or unusual
          activity. Share live footage via SMS and email in just a few clicks.
        </p>
        <p class="mt-2.5 text-base">
          <i>Thoughtfully Designed Our devices are built to be secure</i>,
          starting with the hardware to the systems that store data.
        </p>
        <p class="mt-2.5 text-base">
          Eu elit ut proident ex sit est id. Sit cupidatat exercitation Lorem
          mollit ad consequat enim. Commodo adipisicing nisi ad velit excepteur
          excepteur duis sit deserunt enim magna nostrud magna. Culpa occaecat
          aute cillum aliqua.
        </p>
        <p class="mt-2.5 text-base">
          Sunt officia mollit excepteur proident in eu. Officia consequat ex
          nisi incididunt cupidatat. Culpa sint dolor labore incididunt
          excepteur. Exercitation eiusmod et cupidatat nisi et ipsum pariatur
          sint proident laboris incididunt ex deserunt veniam. Tempor mollit
          magna non aute occaecat tempor. Et est qui tempor aliquip.
        </p>
        <p class="mt-2.5 text-base">
          Non irure incididunt tempor aliquip enim non anim. Nulla nulla laboris
          fugiat adipisicing adipisicing qui ea quis. Dolore tempor labore
          pariatur nisi irure voluptate. Fugiat nulla cupidatat veniam sunt
          enim.
        </p>
        <p class="mt-2.5 text-base">
          Esse ad adipisicing adipisicing ullamco aliqua laborum. Cillum ad quis
          veniam commodo aliquip aliquip et deserunt consequat eu. Commodo
          reprehenderit in enim duis aliquip. Ad quis sunt elit ut excepteur
          nisi.
        </p>
      </div>

      <div class="relative grid grid-cols-2 gap-[1px] w-full bg-azure-gap-line before:absolute before:left-0 before:top-0 before:w-full before:h-7 before:bg-gradient-to-t before:from-white before:to-white/0 before:-translate-y-full">
        <button class="flex justify-center items-center py-4 font-bold text-white text-base bg-azure hover:bg-azure-hover transition-[background-color] duration-default ease-type-1">
          <svg
            class="w-5 h-5 mr-1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g class="fill-white">
              <path d="m3 9c.5522 0 1-.4478 1-1v-2.3374c0-.917.7456-1.6626 1.6626-1.6626h2.3374c.5522 0 1-.4478 1-1s-.4478-1-1-1h-2.3374c-2.0195 0-3.6626 1.6431-3.6626 3.6626v2.3374c0 .5522.4478 1 1 1z"></path>
              <path d="m16 4h2.3374c.917 0 1.6626.7456 1.6626 1.6626v2.3374c0 .5522.4478 1 1 1s1-.4478 1-1v-2.3374c0-2.0195-1.6431-3.6626-3.6626-3.6626h-2.3374c-.5522 0-1 .4478-1 1s.4478 1 1 1z"></path>
              <path d="m21 15c-.5522 0-1 .4478-1 1v2.3374c0 .917-.7456 1.6626-1.6626 1.6626h-2.3374c-.5522 0-1 .4478-1 1s.4478 1 1 1h2.3374c2.0195 0 3.6626-1.6431 3.6626-3.6626v-2.3374c0-.5522-.4478-1-1-1z"></path>
              <path d="m5.6626 22h2.3374c.5522 0 1-.4478 1-1s-.4478-1-1-1h-2.3374c-.917 0-1.6626-.7456-1.6626-1.6626v-2.3374c0-.5522-.4478-1-1-1s-1 .4478-1 1v2.3374c0 2.0195 1.6431 3.6626 3.6626 3.6626z"></path>
              <path d="m3 13h18c.5522 0 1-.4478 1-1s-.4478-1-1-1h-18c-.5522 0-1 .4478-1 1s.4478 1 1 1z"></path>
            </g>
          </svg>
          Summary
        </button>
        <button class="flex justify-center items-center py-4 font-bold text-white text-base bg-azure hover:bg-azure-hover transition-[background-color] duration-default ease-type-1">
          <svg
            class="w-5 h-5 mr-1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g class="fill-white">
              <path d="m7.3945 18.25h2.4238c.8477 0 1.5381-.6899 1.5381-1.5381v-3.9238c0-.8481-.6904-1.5381-1.5381-1.5381h-2.4238c-.8477 0-1.5381.6899-1.5381 1.5381v3.9238c0 .8482.6905 1.5381 1.5381 1.5381zm0-5.5 2.4619.0381v3.9238c0 .021-.0176.0381-.0381.0381l-2.4619-.0381z"></path>
              <path d="m7.3945 10.25h2.4238c.8477 0 1.5381-.6899 1.5381-1.5381v-1.4238c0-.8481-.6904-1.5381-1.5381-1.5381h-2.4238c-.8477 0-1.5381.6899-1.5381 1.5381v1.4238c0 .8482.6905 1.5381 1.5381 1.5381zm0-3 2.4619.0381v1.4238c0 .021-.0176.0381-.0381.0381l-2.4619-.0381z"></path>
              <path d="m14.1816 12.75h2.4238c.8477 0 1.5381-.6899 1.5381-1.5381v-3.9238c0-.8481-.6904-1.5381-1.5381-1.5381h-2.4238c-.8477 0-1.5381.6899-1.5381 1.5381v3.9238c.0001.8482.6905 1.5381 1.5381 1.5381zm-.038-5.4619c0-.021.0176-.0381.0381-.0381l2.4619.0381-.0381 3.9619-2.4619-.0381z"></path>
              <path d="m14.1816 18.25h2.4238c.8477 0 1.5381-.6899 1.5381-1.5381v-1.4238c0-.8481-.6904-1.5381-1.5381-1.5381h-2.4238c-.8477 0-1.5381.6899-1.5381 1.5381v1.4238c.0001.8482.6905 1.5381 1.5381 1.5381zm-.038-2.9619c0-.021.0176-.0381.0381-.0381l2.4619.0381-.0381 1.4619-2.4619-.0381z"></path>
              <path d="m7.7705 22h8.459c3.1816 0 5.7705-2.5889 5.7705-5.771v-8.458c0-3.1821-2.5889-5.771-5.7705-5.771h-8.459c-3.1816 0-5.7705 2.5889-5.7705 5.771v8.458c0 3.1821 2.5889 5.771 5.7705 5.771zm-3.7705-14.229c0-2.0791 1.6914-3.771 3.7705-3.771h8.459c2.0791 0 3.7705 1.6919 3.7705 3.771v8.458c0 2.0791-1.6914 3.771-3.7705 3.771h-8.459c-2.0791 0-3.7705-1.6919-3.7705-3.771z"></path>
            </g>
          </svg>
          Related Contents
        </button>
        <button class="flex justify-center items-center py-4 font-bold text-white text-base bg-azure hover:bg-azure-hover transition-[background-color] duration-default ease-type-1">
          <svg
            class="w-5 h-5 mr-1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g class="fill-white">
              <path d="m20 5.4712c0-1.9141-1.5566-3.4712-3.4707-3.4712h-9.0586c-1.9141 0-3.4707 1.5571-3.4707 3.4712v13.0576c0 1.9141 1.5566 3.4712 3.4707 3.4712h1.5293c.5527 0 1-.4478 1-1s-.4473-1-1-1h-1.5293c-.8105 0-1.4707-.6602-1.4707-1.4712v-13.0576c0-.811.6602-1.4712 1.4707-1.4712h9.0586c.8105 0 1.4707.6602 1.4707 1.4712v5.5288c0 .5522.4473 1 1 1s1-.4478 1-1z"></path>
              <path d="m9 7.75h6c.4141 0 .75-.3359.75-.75s-.3359-.75-.75-.75h-6c-.4141 0-.75.3359-.75.75s.3359.75.75.75z"></path>
              <path d="m9 10.75h6c.4141 0 .75-.3359.75-.75s-.3359-.75-.75-.75h-6c-.4141 0-.75.3359-.75.75s.3359.75.75.75z"></path>
              <path d="m9 13.75h3.9219c.4141 0 .75-.3359.75-.75s-.3359-.75-.75-.75h-3.9219c-.4141 0-.75.3359-.75.75s.3359.75.75.75z"></path>
              <path d="m19.334 13.5674c-.876-.8774-2.3047-.8784-3.1826 0l-4.9736 4.9736c-.1406.1406-.2197.3315-.2197.5303v2.1211c0 .4141.3359.75.75.75h2.1211c.1992 0 .3896-.0791.5303-.2197l4.9746-4.9736c.8768-.8775.8768-2.3043-.0001-3.1817zm-5.8154 6.875h-1.0606v-1.0605l3.0977-3.0977 1.0609 1.0609zm4.7548-4.7539-.5963.5961-1.061-1.061.5957-.5957c.292-.2925.7676-.2935 1.0615 0 .2921.2925.2921.7681.0001 1.0606z"></path>
            </g>
          </svg>
          Save
        </button>
        <button class="flex justify-center items-center py-4 font-bold text-white text-base bg-azure hover:bg-azure-hover transition-[background-color] duration-default ease-type-1">
          <svg
            class="w-5 h-5 mr-1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g class="fill-white">
              <path d="m21.0127 13.4551c-.5713-.313-.8984-.8433-.8984-1.4551 0-.6113.3281-1.1421.8994-1.4551.4404-.2412.7656-.6528.8926-1.1299.1279-.4761.0557-.9707-.2012-1.3936l-1.2705-2.0898c-.5234-.8579-1.6279-1.1479-2.5215-.6587-.6113.3345-1.333.3228-1.9307-.0317-.5352-.3169-.8428-.8359-.8428-1.4233 0-1.0063-.8389-1.8247-1.8691-1.8247h-2.541c-1.0303 0-1.8691.8184-1.8691 1.8247 0 .5874-.3076 1.1064-.8428 1.4233-.5977.3555-1.3194.3672-1.9307.0317-.8916-.4897-2-.1997-2.5215.6592l-1.2705 2.0894c-.2568.4228-.3291.9175-.2011 1.3935.127.4771.4521.8887.8926 1.1299.5712.313.8993.8438.8993 1.4551s-.3281 1.1421-.8994 1.4551c-.4404.2412-.7656.6528-.8926 1.1299-.1279.4761-.0557.9707.2012 1.3931l1.2705 2.0903c.5234.8584 1.6289 1.1494 2.5215.6587.6104-.335 1.332-.3237 1.9307.0317.5352.3169.8428.8359.8428 1.4233 0 1.0063.8389 1.8247 1.8691 1.8247h2.541c1.0303 0 1.8691-.8184 1.8691-1.8247 0-.5874.3076-1.1064.8428-1.4233.5986-.3545 1.3203-.3662 1.9307-.0317.8906.4883 1.999.1992 2.5215-.6592l1.2705-2.0894c.2568-.4229.3291-.918.2012-1.394-.128-.4771-.4532-.8887-.8936-1.1294zm-1.1231 1.6596-1.1025 1.812c-1.2178-.6299-2.6406-.5898-3.8232.1108-1.0908.646-1.7617 1.7461-1.8203 2.9692h-2.2871c-.0586-1.2231-.7295-2.3232-1.8203-2.9692-1.1826-.6997-2.6055-.7412-3.8232-.1108l-1.1016-1.812c1.1142-.6801 1.7743-1.8315 1.7743-3.1147s-.6601-2.4341-1.7753-3.1147l1.1025-1.812c1.2168.6284 2.6387.5894 3.8232-.1108 1.0908-.646 1.7617-1.7461 1.8203-2.9692h2.2871c.0586 1.2231.7295 2.3232 1.8203 2.9692 1.1816.7002 2.6045.7407 3.8232.1108l1.1025 1.812c-1.1152.6807-1.7754 1.832-1.7754 3.1147s.6603 2.4341 1.7755 3.1147z"></path>
              <path d="m11.9893 8.0021c-2.2092 0-4 1.7908-4 4 0 2.2091 1.7908 4 4 4 2.2091 0 4-1.7909 4-4s-1.7909-4-4-4zm0 6c-1.1028 0-2-.8972-2-2s.8972-2 2-2 2 .8972 2 2-.8972 2-2 2z"></path>
            </g>
          </svg>
          Settings
        </button>
      </div>
    </div>
  );
}

export default App;
