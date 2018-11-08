// import RCTBridgeModule
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#elif __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import "React/RCTBridgeModule.h" // Required when used as a Pod in a Swift project
#endif

@interface RNAdobeAnalytics : NSObject <RCTBridgeModule>
// Define class properties here with @property
+ (void) initADBMobile: (BOOL)isDebug configFileName:(NSString *)configFileName;
@end
