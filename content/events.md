---
weight: 4
title: Events & Networking
---
At Impact Hub Auckland, we offer unique and curated events 

Whether you are a impact entrepreneur, creation, innovation, intrapreneur or just curious about how to be part of systemic chance.  We have a mix of in-person and online gatherings.  Topics include

* General business advice around digital marketing, growth strategy, presentations, fundraising and sales
* Impact measurement
* Impact investing
* Climate action business solutions
* Sustainable business recommendations
* Equitable business models
* Inclusive entrepreneurship

### UPCOMING HUI/EVENTS IN TĀMAKI MAKAURAU

{{< optimisedImage image="images/banner-events.jpg" height=280    alt="Upcoming Events" >}}

<iframe id="iframe-container" src="https://events.humanitix.com/know-your-numbers/tickets?w=true&p=%23353337" width="100%" height="600px" frameborder="0"></iframe>
    <script>
        var humanitix = {
            findPos: function(obj) {
                var curtop = 0;
                if (obj.offsetParent) {
                do {
                    curtop += obj.offsetTop;
                } while ((obj = obj.offsetParent));
                return \[curtop];
                }
            }
        };
        window.addEventListener('message', function (e) {
            if (e.origin !== "https://events.humanitix.com"){
                return;
            }   
            var messageData = e.data;
            var iframeEl = document.getElementById('iframe-container');
            if (iframeEl && messageData && !isNaN(messageData.scrollHeight)){
                iframeEl.style.height = messageData.scrollHeight + 'px';
            }
            if (iframeEl && messageData && messageData.pageChange) {
              window.scroll(0, humanitix.findPos(iframeEl));
          }

```

```