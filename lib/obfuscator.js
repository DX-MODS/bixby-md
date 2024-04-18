const JavaScriptObfuscator = require('javascript-obfuscator');

const obfuscateCode = (code) => {
    return JavaScriptObfuscator.obfuscate(
        code,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            shuffleStringArray: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
    ).getObfuscatedCode();
};

module.exports = obfuscateCode;
