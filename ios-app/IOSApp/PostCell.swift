//
//  PostCell.swift
//  IOSApp
//
//  Created by Leon on 2020/5/14.
//  Copyright © 2020 Leon. All rights reserved.
//

import SwiftUI

struct PostCell: View {
    let postData: PostData
    
    var body: some View {
        //左对齐
        VStack (alignment: .leading, spacing: 10){
            HStack(spacing: 5) {
                postData.avatarImage
                    .resizable()
                    .scaledToFill()
                    .frame(width: 50, height: 50)
                    .clipShape(Circle())
                    .overlay(
                        PostVipBadge(isVip: postData.isVip).offset(x: 16, y:16)
                    )
                VStack (alignment: .leading, spacing: 5){
                    Text(postData.name).font(Font.system(size: 16))
                        .foregroundColor(Color(red: 245/255, green: 99/255, blue: 4/255))
                        .lineLimit(1)
                    Text(postData.date)
                        .font(.system(size: 11))
                        .foregroundColor(Color.gray)
                }
                .padding(.leading, 10)
                Spacer()
                Button(action: {
                    print("Cliecked!")
                }){

                    Text("关注")
                        .font(.system(size:14))
                        .foregroundColor(.orange)
                        .frame(width: 50, height: 26)
                        .overlay(
                            RoundedRectangle(cornerRadius: 13).stroke(Color.orange, lineWidth: 1))
                }
            }
            Text(postData.text).font(.system(size: 13))
            if !postData.images.isEmpty {
                loadImage(name: postData.images[0])
                .resizable()
                .scaledToFill()
                .frame(width: UIScreen.main.bounds.width-30, height: (UIScreen.main.bounds.width-30) * 0.75)
                .clipped()
            }
            Divider()
            HStack(spacing: 0) {
                Spacer()
                
                ToolsBarButton(image: "message",
                               text: postData.commentCountText,
                               color: .black)
               
                {
                    print("clicked")
                    
                }
                Spacer()
                
                ToolsBarButton(image: postData.isLiked ? "heart.fill" : "heart",
                               text: postData.likeCountText,
                               color: postData.isLiked ? .red : .black)
                {
                    print("clicked")
                }
                Spacer()
            }
            Rectangle()
                .padding(.horizontal, -15)
                .frame(height: 10)
                .foregroundColor(Color(red: 238/255, green: 238/255, blue: 238/255))
        }
        .padding(.horizontal, 15)
        .padding(.top, 15)
        
    }
}

struct PostCell_Previews: PreviewProvider {
    static var previews: some View {
        PostCell(postData: postList.list[1])
    }
}
