//
//  RatingControlManager.swift
//  CounterApp
//
//  Created by evhive on 09/04/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@available(iOS 9.0, *)
@objc(RatingControlManager)
class RatingControlManager: RCTViewManager {
  override func view() -> UIView! {
    let stackView: UIStackView! = RatingControl()
//    stackView.distribution = .fillEqually
//    stackView.alignment = .center
    return stackView
  }
  
  // this is required since RN 0.49+
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  func updateFromManager(_ node: NSNumber, rating: NSNumber) {
    DispatchQueue.main.async {
      let component = self.bridge.uiManager.view(
        forReactTag: node
        ) as! RatingControl
      component.update(value: rating)
    }
  }
}
