//
//  PostData.swift
//  IOSApp
//
//  Created by Leon on 2020/5/14.
//  Copyright © 2020 Leon. All rights reserved.
//

import SwiftUI

struct PostData: Codable{
    let _id: Int
    let avatar: String
    var isVip: Bool

    let name: String
    let date: String
    var isFollowed: Bool

    let text: String
    let images: [String]
    
    var commentCount: Int
    var likeCount: Int
    var isLiked: Bool

}

extension PostData {
    var avatarImage: Image {
        return loadImage(name: avatar)
    }
    
    var commentCountText: String {
        if commentCount <= 0 { return "评论" }
        if commentCount < 1000 { return "\(commentCount)" }
        return String(format: "%.1fK", Double(commentCount) / 1000)
    }
    
    var likeCountText: String {
        if likeCount <= 0 { return "点赞" }
        if likeCount < 1000 { return "\(likeCount)" }
        return String(format: "%.1fK", Double(likeCount) / 1000)
    }
}

struct PostList: Codable {
    var list: [PostData]
}

let postList = loadPostListData(fileName: "PostListData_recommend_1.json")

func loadPostListData(fileName: String) -> PostList{
    guard let url = Bundle.main.url(forResource: fileName, withExtension: nil) else {
        fatalError("Can not find \(fileName) in main bundle")
    }
    guard let data = try? Data(contentsOf: url) else {
        fatalError("Can not load \(url)")
    }
    
    // type must same as data
    guard let list = try? JSONDecoder().decode(PostList.self, from: data) else {
        fatalError("Can not parse post list json data")
    }
    return list
}


func loadImage(name: String) -> Image {
    return Image(uiImage: UIImage(named: name)!)
}
