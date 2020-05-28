//
//  PostVipBadge.swift
//  IOSApp
//
//  Created by Leon on 2020/5/14.
//  Copyright © 2020 Leon. All rights reserved.
//

import SwiftUI

struct PostVipBadge: View {
    let isVip: Bool
    
    
    var body: some View {
        Group{
            if isVip {
                Text("V").font(.system(size: 12)).frame(width:15, height: 15).foregroundColor(.yellow).background(Color.red).clipShape(Circle())
                .overlay(RoundedRectangle(cornerRadius: 7.5).stroke(Color.white,lineWidth: 1))
            }
        }
    }
}

struct PostVipBadge_Previews: PreviewProvider {
    static var previews: some View {
        PostVipBadge(isVip: false)
    }
}
