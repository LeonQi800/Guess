//
//  ToolsBarButton.swift
//  IOSApp
//
//  Created by Leon on 2020/5/14.
//  Copyright © 2020 Leon. All rights reserved.
//

import SwiftUI

struct ToolsBarButton: View {
    let image: String
    let text: String
    let color: Color
    let action: () -> Void
    
    var body: some View {
            Button(action: action) {
                HStack(spacing: 5) {
                    Image(systemName: image)
                        .resizable()
                        .scaledToFit()
                        .frame(width: 18, height: 18)
                    Text(text)
                        .font(.system(size: 15))
                }
            }
            .foregroundColor(color)
            .buttonStyle(BorderlessButtonStyle())
        }
}

struct ToolsBarButton_Previews: PreviewProvider {
    static var previews: some View {
        ToolsBarButton(image: "heart", text: "点赞", color: .red) {
            print("aaa")
        }
    }
}
