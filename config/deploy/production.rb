# 元々の記述は全て削除して大丈夫です
server '52.192.116.149', user: 'ec2-user', roles: %w{app db web}
# 自身のElasticIPの部分は書き換えてください