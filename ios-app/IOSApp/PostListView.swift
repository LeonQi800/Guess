//
//  PostListView.swift
//  IOSApp
//
//  Created by Leon on 2020/5/14.
//  Copyright © 2020 Leon. All rights reserved.
//

import SwiftUI

struct PostListView: View {
    init() {
        UITableView.appearance().separatorStyle = .none
    }
    
    var body: some View {
        List{
            ForEach(postList.list, id: \._id){postData in
                PostCell(postData: postData)
                .listRowInsets(EdgeInsets())
            }
        }
    }
}

struct PostListView_Previews: PreviewProvider {
    static var previews: some View {
        PostListView()
    }
}
