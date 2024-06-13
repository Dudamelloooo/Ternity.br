!function() {
    "use strict";
    const e = Array.from(document.getElementsByTagName("img"))
      , t = e=>{
        const t = e.parentElement;
        t && (t.style.animation = "none")
    }
    ;
    e.forEach((e=>{
        e.complete ? t(e) : e.addEventListener("load", (()=>{
            t(e)
        }
        ))
    }
    ))
}();

<script type="text/javascript">
            (function(d, t) {
                var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                v.onload = function() {
                  window.voiceflow.chat.load({
                    verify: { projectID: '6634c6da88e73bf67f4a3eec' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production'
                  });
                }
                v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          </script>