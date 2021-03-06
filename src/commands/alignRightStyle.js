(function(wysihtml5) {
  var STYLE_STR  = "text-align: right;",
      REG_EXP = /(\s|^)text-align\s*:\s*[^;\s]+;?/gi;

  wysihtml5.commands.alignRightStyle = {
    exec: function(composer, command) {
      return wysihtml5.commands.formatBlock.exec(composer, "formatBlock", null, null, null, STYLE_STR, REG_EXP);
    },

    state: function(composer, command) {
      return wysihtml5.commands.formatBlock.state(composer, "formatBlock", null, null, null, STYLE_STR, REG_EXP);
    }
  };
})(wysihtml5);
