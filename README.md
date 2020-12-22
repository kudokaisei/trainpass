# Name
TrainPass

# Overview
　何日以上対象区間に通うなら定期を買った方がお得で、逆に損をするのかわかるアプリです。「対象区間の定期代」「対象区間の片道運賃」を打ち込むことで、定期を買うべきボーダーラインになる日数を自動計算してくれます。

# Background
　新型コロナの影響で、リモートワークが増えた友人の「週2日の出勤になったけど今まで通り定期買った方がいいのかな？」という一言から、月に何日以上通うなら定期を買った方がお得だと、瞬時にわかるアプリがあれば便利だと感じ制作しました。  
　リモートでの働き方がより浸透すれば、企業全体で経費を削減するため社員一人一人に計算をさせる必要があるため、その時にも便利だと考えています。

# Demo
トップページ（自動計算動作）  
https://gyazo.com/4267cc374a6e86d20eb2b72aa0c83c01

トップページ（外部サイトへ遷移して定期代、片道運賃が確認できます。）  
https://gyazo.com/1a8bf022d2f96560ffc63a3ca2f626d8  
![サンプル](img width="871" alt="スクリーンショット 2020-12-22 15 16 28" src="https://user-images.githubusercontent.com/68519582/102856348-a24ad480-4469-11eb-8069-1c37df9b8f23.png")

# Ingenuity
１：対象区間の定期代や片道運賃を調べる際、クリックすると新しいタブを開くよう設定したことで、一回一回ブラウザバックしたり入力した数値が消えることなくアプリが使えます。  

２：JavaScriptで定期代を打ち込むDOMと、片道運賃を打ち込むDOM両方に対してイベントを仕掛けることで、どちらか片方だけ数値を変更した際でもスムーズに計算できます。

# Features
・HAML/SASS記法とBEMの命名規則に基づいたマークアップ  
・JavaScriptによる自動計算機能実装

# Plan
　今後は通う日にちを確認するためのカレンダー機能を充実させたいと思っています。（現状小さなカレンダーが表示されるのみ）外部に見やすいカレンダーを表示させ、祝日や休日が瞬時にわかるカレンダーを実装予定。
