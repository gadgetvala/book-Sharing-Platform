import 'dart:ui';

import 'package:flutter/material.dart';

class DefaultPage extends StatefulWidget {
  @override
  _DefaultPageState createState() => _DefaultPageState();
}

class _DefaultPageState extends State<DefaultPage> {
  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    //final double itemHeight = (size.height - kToolbarHeight) / 2;
    final double itemWidth = (size.width / 2);
    return GridView.builder(
        itemCount: 5,
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            mainAxisSpacing: 5,
            crossAxisSpacing: 5,
            childAspectRatio: (itemWidth / 300)),
        itemBuilder: (context, index) {
          return Card(
            margin: EdgeInsets.fromLTRB(5, 5, 5, 5),
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
            clipBehavior: Clip.antiAlias,
            child: Column(
              children: <Widget>[
                Image.asset(
                  'asset/image/login_background.jpg',
                  fit: BoxFit.fill,
                  height: 200,
                ),
                Padding(
                  padding: const EdgeInsets.all(20.0),
                  child: RichText(
                    textAlign: TextAlign.justify,
                    text: TextSpan(
                        text: 'Hello Book nam eqwert yuioa sdghj kcbnm',
                        style: TextStyle(color: Colors.black, fontSize: 16)),
                    maxLines: 2,
                    softWrap: true,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ],
            ),
          );
        });
  }
}
