import React, { Component } from "react";

export default class Instagram extends Component {
  render() {
    return (
      <div
        className="embedsocial-hashtag"
        data-ref="051db147e34b06137d954ea401cb7a4f1c45a651"
        style={{width: "80%"}}
      />
    );
  }

  componentDidMount() {
    (function (d: any, s: any, id: any) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "InstagramScript");
  }
}
