import Head from "next/head";
import { ReactNode } from "react";
import { SurveyProvider } from "../contexts/survey";

export const SimpleLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SurveyProvider>
      <Head>
        <title>Web accessibility experiment - Tommaso Amici</title>
      </Head>

      <main className="flex-1 w-full mx-auto mt-8">{children}</main>

      <div className="relative w-full h-64 mb-4 overflow-hidden">
        <svg
          id="kander"
          className="absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3201 599"
          height={395}
        >
          <g fill="none" fillRule="nonzero">
            <path fill="#FF6242" d="M1600 201h200v200h-200z" />
            <path fill="#E4E7EB" d="M1400 200h200v200h-200z" />
            <path
              fill="#FFDC09"
              d="M1400 200l200 200h-200zM499 226a75 75 0 110 150 75 75 0 010-150z"
            />
            <path fill="#FFF" d="M200 200h199l201 200H200z" />
            <path fill="#00C9F2" d="M400 200L200 400h200z" />
            <path fill="#26468B" d="M299 256h1a45 45 0 110 90h-1a45 45 0 110-90z" />
            <path fill="#E4E7EB" d="M2899 27a75 75 0 110 150 75 75 0 010-150z" />
            <path fill="#00C9F2" d="M2600 1h199l201 200h-400z" />
            <path fill="#FFF" d="M2800 1l-200 200h200z" />
            <path fill="#26468B" d="M2699 57h1a45 45 0 110 90h-1a45 45 0 110-90z" />
            <path fill="#00C9F2" d="M600 200h200v400H600z" />
            <path fill="#3C61AF" d="M700 300h100v100H700z" />
            <path fill="#26468B" d="M600 400h100v100H600z" />
            <path fill="#3C61AF" d="M3200 201v200h-200V201z" />
            <path fill="#FF6242" d="M3100 301v100h-100V301z" />
            <path fill="#FFF" d="M0 200h200v200H0z" />
            <path fill="#FFDC09" d="M100 233l43 16 23 39-8 45-35 30H77l-35-29-8-46 23-39z" />
            <path fill="#26468B" d="M1400 400h200v200h-200z" />
            <path fill="#00C9F2" d="M1500 433l43 16 23 39-8 45-35 30h-46l-35-29-8-46 23-39z" />
            <path fill="#FFF" d="M2400 1h200v200h-200z" />
            <path fill="#26468B" d="M2500 34l43 16 23 39-8 46-35 29h-46l-35-29-8-46 23-39z" />
            <path fill="#3C61AF" d="M800 400V200h200v200z" />
            <path fill="#FF6242" d="M800 400V300h200v100z" />
            <path fill="#FFDC09" d="M2200 1h200v200h-200zM1000 200h200v200h-200z" />
            <path fill="#E4E7EB" d="M1200 200l-200 200h200z" />
            <path fill="#3C61AF" d="M2000 401h200v200h-200z" />
            <path fill="#FF6242" d="M2000 401h101v200h-101z" />
            <path fill="#FFDC09" d="M400 400h200v200H400z" />
            <path fill="#FFF" d="M2600 401h200v200h-200z" />
            <path fill="#FF6242" d="M2650 501a50 50 0 110 100 50 50 0 010-100z" />
            <path fill="#00C9F2" d="M2700 401h100v100h-100z" />
            <path fill="#FFF" d="M800 0h200v200H800z" />
            <path fill="#E4E7EB" d="M900 55a45 45 0 110 90 45 45 0 010-90z" />
            <path fill="#00C9F2" d="M1000 0h200v200h-200z" />
            <path fill="#FFF" d="M1030 30h140v140h-140z" />
            <path fill="#26468B" d="M1100 100L1000 0h100z" />
            <path fill="#00C9F2" d="M1600 601V401h200v200z" />
            <path fill="#FFF" d="M1630 571V431h140v140z" />
            <path fill="#26468B" d="M1700 501l-100 100V501z" />
            <path fill="#00C9F2" d="M2200 1v200h-200V1z" />
            <path fill="#FFF" d="M2170 31v140h-140V31z" />
            <path fill="#26468B" d="M2100 101L2200 1v100z" />
            <path fill="#3C61AF" d="M1400 0v200h-200V0z" />
            <path fill="#FF6242" d="M1200 200L1400 0v200z" />
            <path fill="#FFF" d="M1375 102a75 75 0 11-150 0 75 75 0 01150 0z" />
            <g>
              <path fill="#FFF" d="M0 0h200v200H0z" />
              <path fill="#E4E7EB" d="M200 0L0 200h200z" />
            </g>
            <g>
              <path fill="#26468B" d="M1800 401l200 200h-200z" />
              <path fill="#00C9F2" d="M1900 401h100v100h-100z" />
            </g>
            <path fill="#26468B" d="M2000 201l200 200h-200z" />
            <path fill="#FF6242" d="M200 0l200 200H200z" />
            <g>
              <path fill="#FFDC09" d="M2600 601l-200-200h200z" />
              <path fill="#00C9F2" d="M2400 501h100v100h-100z" />
              <path fill="#E4E7EB" d="M2600 501l-100-100h100z" />
            </g>
            <g>
              <path fill="#FFDC09" d="M2000 1l-200 200V1z" />
              <path fill="#E4E7EB" d="M1900 201V101h100v100zM1900 1l-100 100V1z" />
            </g>
            <g>
              <path fill="#FFDC09" d="M1600 0l-200 200V0z" />
              <path fill="#00C9F2" d="M1500 200V100h100v100z" />
              <path fill="#E4E7EB" d="M1500 0l-100 100V0z" />
            </g>
            <g>
              <path fill="#E4E7EB" d="M2400 401l-200 200h200z" />
              <path fill="#FFDC09" d="M2200 401h100v100h-100z" />
            </g>
            <g>
              <path fill="#FFDC09" d="M1400 400l-200 200h200z" />
              <path fill="#26468B" d="M1200 400h100v100h-100z" />
            </g>
            <path fill="#3C61AF" d="M1400 400l-200-200h200zM1800 201L1600 1h200z" />
            <g>
              <path fill="#3C61AF" d="M800 200H600V0h200z" />
              <path fill="#FFF" d="M701 135L632 0h137z" />
              <path fill="#FF6242" d="M750 90L700 0h100zM650 90L600 0h100z" />
            </g>
            <g>
              <path fill="#26468B" d="M200 400v200H0V400z" />
              <path fill="#00C9F2" d="M135 499L0 569V431z" />
              <path fill="#E4E7EB" d="M90 450L0 500V400z" />
              <path fill="#E4E7EB" d="M90 549L0 599V499z" />
            </g>
            <g>
              <path fill="#26468B" d="M3000 201V1h200v200z" />
              <path fill="#00C9F2" d="M3064 101l137-68v137z" />
              <g fill="#E4E7EB">
                <path d="M3110 151l90-50v100zM3110 51l90-50v100z" />
              </g>
            </g>
            <g>
              <path fill="#E4E7EB" d="M2000 401h-200V201h200z" />
              <path fill="#FFDC09" d="M1901 338l-69-137h137z" />
            </g>
            <path fill="#FFDC09" d="M900 400l100 200H800z" />
            <g>
              <path fill="#E4E7EB" d="M2900 401a100 100 0 110 200 100 100 0 010-200z" />
              <path fill="#FFF" d="M2900 451a50 50 0 110 100 50 50 0 010-100z" />
            </g>
            <g>
              <path fill="#FF6242" d="M2300 201a100 100 0 110 200 100 100 0 010-200z" />
              <path fill="#3C61AF" d="M2300 251a50 50 0 110 100 50 50 0 010-100z" />
            </g>
            <path fill="#00C9F2" d="M1100 400a100 100 0 110 200 100 100 0 010-200z" />
            <g>
              <path fill="#FFDC09" d="M2700 201a100 100 0 110 200 100 100 0 010-200z" />
              <path fill="#FFF" d="M2700 301h100v100h-100z" />
            </g>
            <g>
              <path fill="#E4E7EB" d="M300 400a100 100 0 110 200 100 100 0 010-200z" />
              <path fill="#3C61AF" d="M300 500h100v100H300z" />
            </g>
            <g fill="#FF6242">
              <path d="M2500 301l-100-100h100zM2500 301l100 100h-100zM2500 301l-100 100V301zM2500 301l100-100v100z" />
            </g>
            <g fill="#00C9F2">
              <path d="M3100 501l-100-100h100zM3100 501l100 100h-100zM3100 501l-100 100V501zM3100 501l100-100v100z" />
            </g>
            <g fill="#FFDC09">
              <path d="M500 100L400 0h100z" />
              <path d="M500 0L400 100V0zM600 100L500 200V100z" />
              <path d="M600 200L500 100h100z" />
            </g>
            <g>
              <path fill="#FFDC09" d="M2900 301l-100-100h100z" />
              <path fill="#FFDC09" d="M2900 201l-100 100V201z" />
              <path fill="#00C9F2" d="M3000 301l-100 100V301z" />
              <path fill="#00C9F2" d="M3000 401l-100-100h100z" />
            </g>
          </g>
        </svg>
      </div>

      <footer className="pb-4 mx-auto text-sm">
        <a
          href="https://tommasoamici.com"
          className="underline outline-none text-neutral-700 focus:ring-4 focus:ring-black focus:ring-offset-4"
        >
          &#169; Tommaso Amici
        </a>
      </footer>
    </SurveyProvider>
  );
};
