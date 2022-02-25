

enum ComponentType {
    BASE = "_:base",
    
    WEB_SERVER        = "web:server",
    WEB_API           = "web:api",
    WEB_ALB           = "web:alb",
    WEB_NLB           = "web:nlb",
    WEB_PROXY         = "web:proxy",
    WEB_CACHE         = "web:cache",
    WEB_UI            = "web:ui",
    WEB_LIBRARY       = "web:library",

    OS_PACKAGE        = "os:package",
    OS_WORKER         = "os:worker",
    OS_TASK           = "os:task",

    CONSOLE_APP       = "console:app",
    CONSOLE_SUITE     = "console:suite",
 
    MOBILE_ANDROID    = "android",
    MOBILE_IOS        = "ios",
    MOBILE_SDK        = "sdk",
    MOBILE_LIBRARY    = "library",

    DESKTOP_APP       = "desktop:app",

    GITHUB_ACTION     = "github:action",

    AWS_LAMBDA_APP    = "aws_lambda:app",
    AWS_LAMBDA_FN     = "aws_lambda:fn",
    AWS_LAMBDA_LAYER  = "aws_lambda:layer",

}

enum ComponentPlatform {
    UNKNOWN     = "_",
    WEB         = "web",
    OS          = "os",
    CONSOLE     = "console",
    MOBILE      = "mobile",
    DESKTOP     = "desktop",
    GITHUB      = "github",
    LAMBDA      = "lambda",
}

export { 
    ComponentType,
    ComponentPlatform,
}
