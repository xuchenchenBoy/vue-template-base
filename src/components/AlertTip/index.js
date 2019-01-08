import './index.less';

(function () {
  var $that = this;
  var $alertTip = function (message) {
    // 如果已存在，则更换文字
    var div;
    if (document.querySelector('.js-alert')) {
      div = document.querySelector('.js-alert');
      div.innerText = message;
    } else {
      div = document.createElement('div');
      div.className = 'js-alert';
      div.innerText = message;
      document.body.appendChild(div);
    }
    div.addEventListener('webkitAnimationEnd', removeAlert, false);
    div.addEventListener('animationEnd', removeAlert, false);

    function removeAlert ($ev) {
      if ($ev.animationName === 'js-alertHidden' && document.querySelector('.js-alert')) {
        document.body.removeChild(document.querySelector('.js-alert'));
      }
    }
  };
  $that.alertTip = $alertTip;
}).call(window);
