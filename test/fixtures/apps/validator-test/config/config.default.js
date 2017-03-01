/**
 * Created by anzer on 2017/3/1.
 */
exports.i18n={
    defaultLocale: "zh-cn"
};
exports.validator={
    pretty:false,
    i18n:{
        enable:true,
        defaultLocale: "zh-cn",
        locales:{
            "zh-cn":{
                any: {
                    unknown: `"{{key}}"不允许传递key名为"{{key}}"的参数`,
                    invalid: '"{{key}}"包含无效值',
                    empty: '"{{key}}"不允许为空',
                    required: `缺少参数"{{key}}"`,
                    allowOnly: '"{{key}}"只允许以下值:{{valids}}',
                    default: '获取参数"{{key}}"的默认值时抛出异常'
                },
                alternatives: {
                    base: '不符合任何替代方案'
                },
                array: {
                    base: '"{{key}}"必须是个数组',
                    includes: '"{{key}}"中下标为{{pos}}的值不是有效的值',
                    includesSingle: 'single value of "{{!key}}" does not match any of the allowed types',
                    includesOne: 'at position {{pos}} fails because {{reason}}',
                    includesOneSingle: 'single value of "{{!key}}" fails because {{reason}}',
                    includesRequiredUnknowns: 'does not contain {{unknownMisses}} required value(s)',
                    includesRequiredKnowns: 'does not contain {{knownMisses}}',
                    includesRequiredBoth: 'does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)',
                    excludes: 'at position {{pos}} contains an excluded value',
                    excludesSingle: 'single value of "{{!key}}" contains an excluded value',
                    min: '"{{key}}"最少要有{{limit}}项',
                    max: '"{{key}}"最多能有{{limit}}项',
                    length: '"{{key}}"必须恰好有{{limit}}项',
                    ordered: '"{{key}}"的下标{{pos}}处校验失败：{{reason}}',
                    orderedLength: '"{{key}}"的下标{{pos}}处校验失败，因为最多{{limit}}项',
                    sparse: '"{{key}}"不能是稀疏数组',
                    unique: '"{{key}}"的下标{{pos}}处出现重复值'
                },
                boolean: {
                    base: '"{{key}}"必须是个布尔值'
                },
                binary: {
                    base: '"{{key}}"的类型必须是buffer或者string',
                    min: '"{{key}}"必须至少{{limit}}字节',
                    max: '"{{key}}"必须至多{{limit}}字节',
                    length: '"{{key}}"必须{{limit}}字节'
                },
                date: {
                    base: '"{{key}}"必须是毫秒数或者有效日期字符串',
                    format: '"{{key}}"必须是以下{{format}}格式的日期字符串',
                    strict: '"{{key}}"必须是个有效的日期',
                    min: '"{{key}}"不能早于"{{limit}}"',
                    max: '"{{key}}"不能晚于"{{limit}}"',
                    isoDate: '"{{key}}"必须是有效的ISO 8601日期',
                    timestamp: {
                        javascript: '"{{key}}"必须是有效的是时间戳或者毫秒数',
                        unix: '"{{key}}"必须是有效的时间戳或者秒数'
                    },
                    ref: '"{{key}}"引用的 "{{ref}}" 不是一个日期'
                },
                function: {
                    base: '"{{key}}"必须是个函数',
                    arity: '"{{key}}"的参数数量必须有{{n}}个',
                    minArity: '"{{key}}"最少需要有{{n}}个参数',
                    maxArity: '"{{key}}"最多能有{{n}}个参数',
                    ref: '"{{key}}"必须是Joi的引用类型'
                },
                lazy: {
                    base: '!!schema error: lazy schema must be set',
                    schema: '!!schema error: lazy schema function must return a schema'
                },
                object: {
                    base: '必须是个对象',
                    child: '!!child "{{!child}}" fails because {{reason}}',
                    min: '"{{key}}"必须至少{{limit}}个子项',
                    max: '"{{key}}"必须至多{{limit}}个子项',
                    length:' "{{key}}"必须有{{limit}}个子项',
                    allowUnknown: '!!"{{!child}}"不允许',
                    with: 'missing required peer "{{peer}}"',
                    without: 'conflict with forbidden peer "{{peer}}"',
                    missing: 'must contain at least one of {{peers}}',
                    xor: 'contains a conflict between exclusive peers {{peers}}',
                    or: 'must contain at least one of {{peers}}',
                    and: 'contains {{present}} without its required peers {{missing}}',
                    nand: '!!"{{main}}" must not exist simultaneously with {{peers}}',
                    assert: '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
                    rename: {
                        multiple: '无法重命名"{{key}}"的子项"{{from}}"为"{{to}}"，因为已经不允许多项同时重命名为同名项',
                        override: '无法重命名"{{key}}"的子项"{{from}}"为"{{to}}"，因为不允许覆盖已存在项'
                    },
                    type: '"{{key}}"必须是"{{type}}"类型',
                    schema: '"{{key}}"必须是Joi实例'
                },
                number: {
                    base: '"{{key}}"必须是数字',
                    min: '"{{key}}"不能小于{{limit}}',
                    max: '"{{key}}"不能大于{{limit}}',
                    less: '"{{key}}"必须小于{{limit}}',
                    greater: '"{{key}}"必须大于{{limit}}',
                    float: '"{{key}}"必须是小数',
                    integer: '"{{key}}"必须是整数',
                    negative: '"{{key}}"必须是负数',
                    positive: '"{{key}}"必须是正数',
                    precision: '"{{key}}"的精度不能大于{{limit}}',
                    ref: '"{{key}}"引用的"{{ref}}"不是数字',
                    multiple: '"{{key}}"必须是{{multiple}}的倍数'
                },
                string: {
                    base: '"{{key}}"必须是字符串',
                    min: '"{{key}}"最少需要{{limit}}个字符长度',
                    max: '"{{key}}"最多只能{{limit}}个字符',
                    length: '"{{key}}"必须恰好{{limit}}个字符',
                    alphanum: '"{{key}}"只能包含字母或者数字',
                    token: '"{{key}}"只能包含字母、数字、下划线',
                    regex: {
                        base: '"{{key}}"不匹配正则表达式: {{pattern}}',
                        name: '"{{key}}"不匹配名称为{{name}}的正则表达式',
                        invert: {
                            base: '"{{key}}"with value "{{!value}}" matches the inverted pattern: {{pattern}}',
                            name: '"{{key}}"with value "{{!value}}" matches the inverted {{name}} pattern'
                        }
                    },
                    email: '"{{key}}"必须是有效的电子邮箱地址',
                    uri: '"{{key}}"必须是有效的uri',
                    uriRelativeOnly: '"{{key}}"必须是有效的相对uri',
                    uriCustomScheme: '"{{key}}"必须是符合{{scheme}}规则的uri',
                    isoDate: '"{{key}}"必须是ISO 8601格式的日期字符串',
                    guid: '"{{key}}"必须是有效的GUID字符串',
                    hex: '"{{key}}"只能包含有效的hexadecimal字符',
                    base64: '"{{key}}"必须是有效base64字符串',
                    hostname: '"{{key}}"必须是有效的主机名',
                    lowercase: '"{{key}}"只能包含小写字母',
                    uppercase: '"{{key}}"只能包含大写字母',
                    trim: '"{{key}}"的开头以及结尾不能有空白字符串',
                    creditCard: '"{{key}}"必须是有效的credit card代码',
                    ref: '"{{key}}"引用的 "{{ref}}" 不是字符串',
                    ip: '"{{key}}"必须是一个有效的ip地址，符合{{cidr}} CIDR',
                    ipVersion: '"{{key}}"必须是一个有效的ip地址，符合{{cidr}} CIDR v{{version}}'
                }
            }
        }
    }
};

exports.pretty={

    i18n:false,
    messages:{
        0:"成功",
        400:"校验失败"
    }
};