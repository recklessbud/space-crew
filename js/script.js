// navigation (navbar1)
const navbar = document.querySelector(".first-nav")
const hamburgerMenu = document.querySelector(".btn-menu");

   hamburgerMenu.addEventListener("click", mobileMenu);


    function mobileMenu() {
        const visible = navbar.getAttribute("data-visible");
   // if the nav is closed, open it
      if (visible === "false") {
          navbar.setAttribute(`data-visible`, true);
            hamburgerMenu.setAttribute(`aria-expanded`, true)
      }else{
        navbar.setAttribute(`data-visible`, false)
        hamburgerMenu.setAttribute(`aria-expanded`, false)

      }
       
    }



    // tabs
   const tabList = document.querySelector("[role='tablist']");
    const tabs = tabList.querySelectorAll("[role='tab']");
        

      tabList.addEventListener(`keydown`, tabSystem);

   tabs.forEach((t) => {
       t.addEventListener("click", changeContent)
   });

    let tabMe = 0;
        function tabSystem(s) {
             const left = 37;
              const right = 39; 
        
              // if the key is pushed change the tabindex from 0 to -1
              if (s.keyCode === left || s.keyCode === right) {
                  tabs[tabMe].setAttribute("tabindex", -1)
            }
            //  if the right key is pushed move to the next tab
              if (s.keyCode === right) {
                  tabMe++
                    if (tabMe >= tabs.length) {
                        tabMe = 0;
                    }
              }else
            //  if the left key is pushed move to the previous tab
            if (s.keyCode === left) {
               tabMe--;
               if (tabMe < 0) {
                tabMe = tabs.length - 1;
            }
              
            }
           tabs[tabMe].setAttribute("tabindex", 0)
              tabs[tabMe].focus();
          }


        function changeContent(s) {
          const targetTab = s.target;
            const target4 = targetTab.getAttribute(`aria-controls`);
              const target7 = targetTab.getAttribute("data-image")

              const targetParent = targetTab.parentNode;
                const targetContainer = targetParent.parentNode;
                
                targetParent.querySelector("[aria-selected = 'true']")
                    .setAttribute("aria-selected", false)

                    targetTab.setAttribute("aria-selected", true);

                    // console.log(targetContainer);
                      hideContent(targetContainer, '[role="tabpanel"]' )
                    showContent(targetContainer, [`#${target4}`])
                 
                     hideContent(targetContainer, "picture");
                     showContent(targetContainer, [`#${target7}`]);
          }

           function hideContent(s, e) {
              s.querySelectorAll(e).forEach((item) => {
              item.setAttribute("hidden", true)
          })
           }
             function showContent(s, e) {
             s.querySelector(e).removeAttribute('hidden');
             }