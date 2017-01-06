export default {
  // "Hello-o-o!    How are you ^_^" -> "Hellooo How are you "
  leaveOnlyAlphaNumericAndSpaces(str) {
    // leave only alpha-numeric and spaces
    /* eslint-disable */
    return str.replace(/[^a-z0-9\s]/gi, "").replace(/  +/g, " ");
    /* eslint-enable */
  },

  // "google hangout" -> "Google hangout"
  strToFirstLetterUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  // "Google hangout" -> "google hangout"
  strToFirstLetterLowerCase(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  },

  // "Google Hangout" -> "GoogleHangout"
  strToCapitalizedWords(str) {
    return this.leaveOnlyAlphaNumericAndSpaces(str).replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter) {
      return letter.toUpperCase();
    }).replace(/\s+/g, "");
  },

  // "Google Hangout" -> "googleHangout"
  strToCamelCase(str) {
    return this.strToFirstLetterLowerCase(this.leaveOnlyAlphaNumericAndSpaces(str).replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter) {
      return letter.toUpperCase();
    }).replace(/\s+/g, ""));
  },

  // "google-hangout" -> "googleHangout"
  hyphenWordToCamelCase(str) {
    return str.replace(/-([a-z])/g, w => w[1].toUpperCase());
  },

  // "googleHangout" -> "Google Hangout"
  camelCaseToCapitalizedWords(str) {
    return this.strToFirstLetterUpperCase(str.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, "$1"));
  },

  // "google-hangout" -> "Google Hangout"
  hyphenWordToCapitalizedWords(str) {
    return this.camelCaseToCapitalizedWords(this.hyphenWordToCamelCase(str));
  },
};