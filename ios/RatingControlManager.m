//
//  RatingControlManager.m
//  CounterApp
//
//  Created by evhive on 09/04/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "React/RCTViewManager.h"
//
// the component will be exposed as "CounterView"
// if the name ends with "Manager" it will be stripped by React Native
@interface RCT_EXTERN_MODULE(RatingControlManager, RCTViewManager)
// or, we could also rename it ourselves
//@interface RCT_EXTERN_REMAP_MODULE(CounterView, CounterViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(rating, NSNumber)

// the type could also be "RCTDirectEventBlock", but the difference is not explained anywhere
// the name must begin with lowercase "on"
RCT_EXPORT_VIEW_PROPERTY(onUpdates, RCTBubblingEventBlock)

// all NSNumber arguments are required to be marked as "nonnull"
RCT_EXTERN_METHOD(updateFromManager:(nonnull NSNumber *)node count:(nonnull NSNumber *)count)

@end
