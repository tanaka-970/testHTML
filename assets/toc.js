// サイト全体の目次。ページを足したらここにも足す（検索もこの表を引く）
window.DOCS_TOC = [
  { title: "はじめに", children: [
    { title: "このドキュメントについて", href: "index.html", summary: "ドキュメントの読み方と対象バージョン" }
  ]},
  { title: "エディターの基本", children: [
    { title: "メニューバー", href: "editor/menu-bar.html", summary: "File、Edit、作成、カメラ、UI、Window、実行、Help の各項目", keywords: "New Empty Scene Save Undo Redo 保存 元に戻す 実行 停止 一時停止 Workspace 見た目 プリセット カメラ 移動速度" },
    { title: "ツールバーと実行状態の表示", href: "editor/toolbar.html", summary: "Move/Rotate/Scale、Snap、World/Local、Pivot、補助View、実行ボタン、機能検索", keywords: "ギズモ gizmo 移動 回転 拡縮 スナップ ピボット 実行 停止 一時停止 再開 Search 機能検索 編集中" },
    { title: "シーンビューとカメラ操作", href: "editor/scene-view.html", summary: "描画モード、表示の切り替え、単体表示、選択、カメラの動かし方、右クリックメニュー", keywords: "Scene View ゲーム 陰影 ワイヤーフレーム コライダー グリッド 単体表示 矩形選択 カメラ WASD オービット パン ドリー フォーカス テンキー Play From Here プリセット Unity Unreal Maya Blender" },
    { title: "階層パネル", href: "editor/hierarchy.html", summary: "GameObject の作成、選択、検索、右クリックメニュー、並べ替えと親子付け", keywords: "Hierarchy ヒエラルキー 作成 複製 削除 名前変更 F2 親子 ドラッグ フォルダ Prefab Controlled アイコン 検索" },
    { title: "ゲームシーンの設定", href: "editor/game-scene-settings.html", summary: "階層パネルのワールド・メインカメラ・描画設定・ポスト処理", keywords: "ゲームシーン ワールド メインカメラ 描画設定 ポスト処理 背景色 カメラ操作の関門 Scene Camera 移動速度 視野角 全画面表示 描画出力 SSAO SSR TAA 影 動的影 CSM PCSS タイルドDeferred ヒートマップ 既定値へ戻す 輝度抽出 Bloom ビネット FXAA 最終合成 輝度しきい値 露出" },
    { title: "インスペクター", href: "editor/inspector.html", summary: "GameObject のヘッダー、コンポーネントの表示と並べ替え、追加と削除", keywords: "Inspector 編集テーブル 操作対象 Advanced IDs レンダー スクリプト 動作 その他 ◆ 先頭 末尾 コンポーネントを追加 削除 Backspace 必須 推奨 Missing Component" },
    { title: "プロジェクトパネル", href: "editor/project.html", summary: "アセットの検索、作成、開く、名前変更、削除、ドラッグ＆ドロップ", keywords: "Project Assets アセット 検索 フィルタ Refresh Create Folder C# Script Material Shader 名前を変更 複製 削除 ゴミ箱 ダブルクリック エクスプローラー" },
    { title: "シーンを作る・開く・保存する", href: "editor/scene-files.html", summary: "新規作成、開く、保存、未保存の確認、自動保存と復旧", keywords: "New Empty Scene Default Open Save Save As replayscene 未保存 別名で保存 破棄 自動保存 Autosave Recovery Recover 復旧" },
    { title: "ゲームを実行する", href: "editor/play-mode.html", summary: "実行の準備、実行中の表示、一時停止、停止", keywords: "Play 実行 F5 停止 Shift+F5 一時停止 再開 実行準備中 中止 スナップショット C# ビルド timescale" },
    { title: "コンソール", href: "editor/console.html", summary: "ログの読み方とコピー、コマンド一覧", keywords: "Console ログ Error Warning Info コピー コマンド help save undo redo objects workspace timescale bloom deferred fullscreen" },
    { title: "Workspace", href: "editor/workspaces.html", summary: "作業ごとの画面の種類と切り替え方", keywords: "ワークスペース 基本 配置 モデリング アニメーション レンダリング シェーダー調整 UI Motion 編集テーブル 頂点ペイント" },
    { title: "項目の説明（ツールチップ）", href: "editor/help-tooltips.html", summary: "マウスを乗せると出る説明と、右クリックでの書き換え", keywords: "ツールチップ 説明 ヘルプ 説明を編集 説明が未記入 既定文へ戻す 書いた内容を消す EditorHelp replayhelp 右クリック" },
    { title: "頂点カラーペイント", href: "editor/vertex-paint.html", summary: "モデリング Workspace で頂点に 0〜1 の値を塗る", keywords: "頂点カラー 頂点カラーペイント 頂点ペイント vertex color paint replayvcolor モデリング チャンネル 加算 減算 置換 ならし 半径 強さ 減衰 GGST 影 保存 再読込 指紋" },
    { title: "シェーダー調整 Workspace", href: "editor/shader-adjustment.html", summary: "デバッグメッシュ・画面効果・描画確認の 3 タブ", keywords: "シェーダー調整 Workspace シェーダー調整テーブル デバッグメッシュ デバッグ静的メッシュ 画面効果 描画確認 輪郭線パス PBR影パス Deferred workspace shader" },
    { title: "ショートカット一覧", href: "editor/shortcuts.html", summary: "既定のキー割り当てと変更方法", keywords: "キー 割り当て Ctrl F5 F2 Shift ギズモ 複製 コピー 貼り付け" }
  ]},
  { title: "コンポーネント", children: [
    { title: "コンポーネント一覧", href: "components/index.html", summary: "分類ごとの全コンポーネントと、必須・推奨の考え方", keywords: "Component 部品 一覧 Core Rendering Lighting Camera Audio Physics Landscape UI Motion Scene 必須 推奨" },
    { title: "Core", children: [
      { title: "Transform", href: "components/transform.html", summary: "位置・回転・拡大率（親から見た値）", keywords: "トランスフォーム 位置 回転 拡大率 スケール ローカル 親子" },
      { title: "State", href: "components/state.html", summary: "名前付きの状態を持ち、変化を知らせる", keywords: "ステート 状態 StateChanged Motion Player トリガー" },
      { title: "Pivot", href: "components/pivot.html", summary: "ギズモで回転・拡縮するときの基準点", keywords: "ピボット 基準点 境界 中心 面 ローカル ワールド 別オブジェクト Snap 頂点 辺" }
    ]},
    { title: "Rendering", children: [
      { title: "メッシュの描画（Mesh / Primitive / Skinned）", href: "components/mesh-renderers.html", summary: "モデルや基本形状の表示、マテリアル、スロット、影", keywords: "Mesh Renderer Primitive Mesh Renderer Skinned Mesh Renderer メッシュ モデル マテリアル マテリアル上書き スロット テクスチャ 影 描画方式 PBR トゥーン アンリット 輪郭線 Rendering Layer 表示姿勢補正 縮尺 Animator マゼンタ 両面 glTF 制限 両面 片面 アウトライン 黒い 骨 256 ウェイト JOINTS_1 モーフ リグ表示" },
      { title: "Animator", href: "components/animator.html", summary: "骨アニメーションの状態と遷移、パラメーター", keywords: "アニメーター アニメーション ステート State Transition 遷移 クリップ ブレンド Bool Float Trigger パラメーター AnimatorStateChanged SetFloat SetTrigger Play 旧 待機 移動 ジャンプ" },
      { title: "Post Process Volume", href: "components/post-process-volume.html", summary: "画面全体の仕上げ（Bloom、ビネット、SSAO、SSR、TAA、露出、色）", keywords: "ポストプロセス ポスト処理 Bloom ブルーム ビネット SSAO SSR TAA 露出 色フィルタ 優先度 描画設定" },
      { title: "空", href: "components/sky.html", summary: "空の画像、時間帯の移り変わり、雲・星・月", keywords: "Skybox スカイボックス 空 キューブマップ HDR パノラマ 時間帯 キーフレーム 雲 星 月 回転 トゥーン 環境光" },
      { title: "Particle Emitter", href: "components/particle-emitter.html", summary: "火花や煙などの粒を出す", keywords: "パーティクル 粒 エミッター 発生量 寿命 初速 重力 抵抗 拡散角 Emit Clear 火花 煙" },
      { title: "3D ラインと軌跡", href: "components/lines.html", summary: "点をつなぐ帯状の線と、動いた跡の線", keywords: "3D ライン Line Renderer 軌跡 Trail リボン 点 曲線 滑らかさ 太さ Trim UV テクスチャ グラデーション" },
      { title: "Effect Stack と Effect Preset", href: "components/effect-stacks.html", summary: "Screen / Model / UI の Effect Stack、適用範囲、Effect Preset", keywords: "エフェクト Screen Effect Stack Model Effect Stack UI Effect Stack Effect Preset replayeffect 適用範囲 マスク 投げ縄 Rendering Layer 背景だけ 空だけ 切り抜き Overlay はみ出し Precompose 背景を取り込む カスタムシェーダー" },
      { title: "エフェクトの種類", href: "components/effect-kinds.html", summary: "86 種類のエフェクトと種類ごとの項目", keywords: "ぼかし 発光 色調補正 ノイズ 揺れ マスク ワイプ ディゾルブ 歪み 色収差 網点 ブラー ビネット 光条 レンズ ポスタライズ 二値化 カラーランプ レベル補正 色温度 エッジ 輪郭線 ブラシストローク モザイク グリッチ CRT VHS レターボックス LUT トーンカーブ ドロップシャドウ ホログラム 集中線 レンズフレア 玉ボケ チルトシフト" },
      { title: "Normal Adjust", href: "components/normal-adjust.html", summary: "陰影に使う法線を球の向きへ寄せる", keywords: "ノーマルアジャスト 法線 陰影 トゥーン 球 Blend Radius Falloff Bone スロット" }
    ]},
    { title: "Physics", children: [
      { title: "物理（Rigidbody と Collider）", href: "components/physics.html", summary: "剛体、球・箱・カプセル・メッシュの当たり判定、レイヤー、トリガー、衝突イベント", keywords: "物理 Rigidbody リジッドボディ 剛体 Collider コライダー 当たり判定 Sphere Box Capsule Mesh 静的 キネマティック 動的 質量 重力 摩擦 反発 固定 停止 CCD レイヤー マスク トリガー TriggerEnter CollisionEnter AddForce Teleport" }
    ]},
    { title: "Landscape", children: [
      { title: "地形（Landscape）", href: "components/landscape.html", summary: "地面の作成、スカルプト、面の加工、描画と当たり判定", keywords: "地形 ランドスケープ Landscape Ground Renderer Collider スカルプト ブラシ 盛り上げる 掘り下げる なめらか 平ら でこぼこ 細かく トポロジー 押し出し 穴 トンネル 洞窟 辺をつなぐ 再生成 ロード範囲 区画" }
    ]},
    { title: "Lighting", children: [
      { title: "ライト（Directional / Point / Spot）", href: "components/lights.html", summary: "3 種類のライトのプロパティと使い方、影の設定", keywords: "Directional Light Point Light Spot Light 平行光源 点光源 スポットライト 影 シャドウ バイアス 強さ 範囲 角度" }
    ]},
    { title: "Camera", children: [
      { title: "Camera", href: "components/camera.html", summary: "ゲーム中の視点。投影方式、クリップ、優先度、分割表示", keywords: "カメラ 視野角 FOV Orthographic Perspective Near Far 優先度 分割表示 ビューポート 画面分割" },
      { title: "Camera Target", href: "components/camera-target.html", summary: "カメラに追いかけられる目印", keywords: "カメラターゲット 注視点 オフセット 優先度 操作対象" },
      { title: "Follow Target", href: "components/follow-target.html", summary: "カメラを Camera Target に追従させる", keywords: "追従 三人称 距離 高さ 回り込み CameraRotate Motion" }
    ]},
    { title: "Audio", children: [
      { title: "Audio Listener", href: "components/audio-listener.html", summary: "音を聞く位置", keywords: "オーディオリスナー 耳 3D 優先度" },
      { title: "Audio Source", href: "components/audio-source.html", summary: "WAV ファイルを鳴らす", keywords: "オーディオソース 音 サウンド BGM 効果音 WAV Clip Path Loop Volume Pitch 3D Min Max Distance PlaySound StopSound" }
    ]},
    { title: "Motion", children: [
      { title: "Motion Player と Composition Player", href: "components/motion-players.html", summary: "モーションとコンポジションの再生、きっかけ、終了処理", keywords: "モーション プレイヤー コンポジション 再生 きっかけ トリガー 押された カーソル State 遅延 ループ ピンポン 保持 Blend In 重み Time Scale ばらつき MotionFinished キー" },
      { title: "Property Link", href: "components/property-link.html", summary: "数値プロパティを変換して別のコンポーネントへつなぐ", keywords: "プロパティリンク 接続 変換 範囲 イージング 平滑化 内部名 循環 ゲージ" }
    ]},
    { title: "Scene", children: [
      { title: "Scene Loader", href: "components/scene-loader.html", summary: "シーン読み込みの進み具合を出す", keywords: "シーンローダー 読み込み ロード 進捗 progress ロード画面 Scene Flow" },
      { title: "Persistent", href: "components/persistent.html", summary: "シーン切り替えで GameObject を持ち越す", keywords: "永続 DontDestroyOnLoad シーン遷移 残す 持ち越し" }
    ]},
    { title: "Navigation", children: [
      { title: "Nav Agent", href: "components/nav-agent.html", summary: "障害物をよけて目的地へ移動する", keywords: "ナビ エージェント 経路探索 A* MoveTo Stop Arrived 移動 追跡 Character Motor グリッド" }
    ]},
    { title: "UI", children: [
      { title: "Image・Shape Image・Sprite Animator", href: "components/ui-image.html", summary: "画像の表示、塗り量ゲージ、自由な形の切り抜き、スプライトシートのアニメーション", keywords: "UI Image 画像 Sprite Atlas Atlas Region 色 不透明度 塗り量 塗り方向 円形 360 ゲージ 塗りを反転 比率を維持 9 スライス ブレンド 加算 UV オフセット UV スケール Shape Image Path ベジェ 切り抜き Sprite Animator スプライトシート 列数 行数 FPS 再生方式 ループ ピンポン" },
      { title: "Text・Text Animator", href: "components/ui-text.html", summary: "文字の表示、フォント、縁取りと影、Rich Text、ローカライズ、数値表示、文字ごとのアニメーション", keywords: "UI Text テキスト フォント 文字サイズ 文字間隔 行間 横揃え 縦揃え 折り返し 縁取り 影 Rich Text タグ color size b i Localization Key ローカライズ 言語 Localization Table 既定言語 数値の接続元 数値書式 小数桁 スコア Text Animator 範囲 範囲オフセット 範囲形状 ランダム 基準点" },
      { title: "Button・入力部品・Mask", href: "components/ui-controls.html", summary: "Button、Selectable、Layout Group、Scroll View、Slider、Input Field、Mask、Language Switch、Button Property Toggle", keywords: "UI Button ボタン 状態 ホバー 押下 状態 Motion Selectable フォーカス Tab 順 方向探索 輪郭線 Horizontal Layout Group Vertical Layout Group Grid Layout Group Padding 間隔 セルサイズ Scroll View Content スクロール ホイール スクロールバー Slider 値 Fill Image Handle Rect Input Field 入力 IME Placeholder Password Max Characters Mask マスク 矩形 形状 Track Matte Object Alpha Luma Language Switch 言語コード Button Property Toggle" },
      { title: "Shape・Puppet Deform", href: "components/ui-shape.html", summary: "図形の描画（塗り、線、グラデーション、Trim、破線、自由ベジェ）と画像の部分変形", keywords: "UI Shape 図形 矩形 角丸 円 弧の曲がり 線 多角形 ベジェ スーパー楕円 極座標式 星形 自由図形 自由ベジェ Path 塗り色 グラデーション 色の位置 線幅 線色 Trim 破線 Puppet Deform Pin Bind Pose 影響半径 格子 変形" },
      { title: "Canvas と Rect Transform", href: "components/ui-layout.html", summary: "UI の根元と四角い範囲。アンカー、ピボット、描画順、スケール方式", keywords: "UI Canvas Rect Transform アンカー ピボット サイズ差分 描画順 sort_order 子へ回転・拡大を伝える 描画モード Screen Space Overlay World Space スケール方式 基準解像度 幅/高さの一致 不透明度 UI Workspace UI 階層" }
    ]},
    { title: "エディター専用", children: [
      { title: "Folder と Scene Note", href: "components/editor-helpers.html", summary: "階層の整理用フォルダと、シーンビューの作業メモ", keywords: "フォルダ Folder シーンメモ Scene Note メモ TODO BUG 注釈 完了 Overlay World" }
    ]}
  ]},
  { title: "エディターのウィンドウ", children: [
    { title: "マテリアルの編集", href: "windows/material-editor.html", summary: "マテリアルのシェーダー、値、Alpha Mode、Shader Stack のレイヤー、保存", keywords: "マテリアル Material replaymaterial シェーダー Shader PBR Toon GGST Unlit Flat Fill Pixelate 基本色 基本色マップ 法線マップ 金属度 粗さ 発光 遮蔽 アルファ閾値 両面を描く Alpha Mode Opaque Mask Blend 半透明 くり抜き Shader Stack Layer 輪郭線 Outline Wireframe Missing Shader マゼンタ 赤紫 Save Material Assign to Selected Renderer" },
    { title: "Profiler と DX12 Debug", href: "windows/profiler.html", summary: "F4 の描画統計（CPU/GPU 時間、処理の内訳、ログ出力）と DX12 の内部状態", keywords: "Profiler 描画統計 F4 FPS CPU GPU ms Frame Budget VSync 垂直同期 三角形 描画回数 Scope Tree Hotspots Budget 計測ログ CSV Trace Saved Profile 自動ログ VRAM Overdraw カリング LOD 深度プリパス DX12 Debug Descriptor Heap Upload Fence PSO DXC GPU Passes" },
    { title: "スクリーンショット回帰", href: "windows/screenshot-regression.html", summary: "基準画像を撮って画面をピクセル単位で比べる", keywords: "スクリーンショット回帰 基準画像 Golden 基準を撮る 基準と比べる 自己診断 許容差 止めるフレーム数 差分 diff latest 回帰なし 回帰あり Saved Golden" },
    { title: "Validation と Diagnostics", href: "windows/validation.html", summary: "シーンの設定ミスの自動点検、シーンの数値、コンポーネントとプロパティの内部名の一覧", keywords: "Validation Diagnostics 検証 診断 再検証 ERROR WARN 修正案 この GameObject の診断 SCENE_CONTROLLED_UNSET ASSET_MESH_MISSING COLLIDER_MASK_EMPTY LIGHT_LIMIT_EXCEEDED Point Light 8 Spot Light 4 Directional Light 複数 Landscape Prefab Source Component API 内部名 C# 未対応 読取のみ" },
    { title: "シェーダ一覧", href: "windows/shader-catalog.html", summary: "シェーダーのコンパイル状態、エラーの行、公開プロパティの確認", keywords: "シェーダ一覧 シェーダー一覧 Shader Catalog 再走査 全部コンパイル 保存で自動コンパイル コンパイル失敗 前回のを使用中 GUID 重複 replay_guid pragma property 書式エラー Static Skinned 変種 cbuffer Visual Studio 赤紫 マゼンタ" },
    { title: "Shader Composer", href: "windows/shader-composer.html", summary: "ノードをつないで Unlit のシェーダーを作るウィンドウ（Surface / Layer / PostProcess）", keywords: "Shader Composer シェーダー ノード グラフ replayshadergraph HLSL 生成 コンパイル Surface Layer PostProcess Unlit マテリアルプロパティ Float Property Color Property Texture Property UV Time Normal View Direction Add Multiply Lerp Saturate Power Fresnel UV Scroll Noise Dissolve Rotate UV Polar UV Remap Smoothstep Step Split Component Combine RGBA Gradient Surface Output Layer Output 自動保存 Generate Preview" },
    { title: "ゲームを書き出す", href: "windows/export-game.html", summary: "エディターなしで起動できるゲームのフォルダーを書き出すダイアログ", keywords: "ゲームを書き出す 書き出し エクスポート export standalone 配布 exe replaygame ゲーム名 書き出し先 最初の Scene Saved Build 上書き ShaderCache ScriptCatalog replaypack Release 除外 LOCALAPPDATA" },
    { title: "Motion Workspace", href: "windows/motion-workspace.html", summary: "モーションのトラック、キー、イージング、タイムライン、グラフエディター、プレビュー、コンポジション", keywords: "Motion Workspace モーション replaymotion replaycomp コンポジション Composition トラック キー イージング Easing CustomBezier PresetCurve EaseInPower Step タイムライン グラフエディター 速度グラフ プレビュー 復元 Wiggle 揺れ ループ 往復 オフセット継続 式 エクスプレッション バインド起点 イベントトラック ブレンドモード Override Additive Multiply Blend 時間リマップ 時間スケール フレーム吸着 FPS ショートカット 自動スムーズ 不透明度フェード Motion リグ" },
    { title: "UI Workspace", href: "windows/ui-workspace.html", summary: "UI の配置・リサイズ・回転、UI 階層、UI インスペクター、図形マスクの編集", keywords: "UI Workspace UI 階層 UI インスペクター シーンビュー 解像度 拡大 グリッド リサイズ ハンドル 回転 Shift Alt 描画順 最前面 最背面 図形で切り抜いたImage 図形イメージ UI図形イメージ マスク枠 全体の拡大率 自由図形 頂点 Pin Track Matte アンカー 左上 中央 全体 Motion を作成" },
    { title: "イージングカーブ ウィンドウ", href: "windows/easing-curve.html", summary: "サンプルと制御点でカーブを描き、モーションに使う", keywords: "イージング カーブ easing replayeasing サンプル 制御点 フリーハンド 再近似 プリセット サンプルへ焼く オーバーシュート 速度グラフ 挙動プレビュー PresetCurve 時間リマップ Time Remap EaseOutBack Elastic" },
    { title: "Sprite Atlas Editor", href: "windows/sprite-atlas.html", summary: "画像に名前付きの範囲（Region）を付け、UI Image で使う", keywords: "スプライトアトラス Sprite Atlas replayatlas Region 矩形作成 Pixel Snap 自由形状 UV Rect Pivot Original Size Trim Offset Rotated DDS 埋め込み 選択画像をAtlasに設定 atlas_region UI Image" },
    { title: "カメラ操作プリセット ウィンドウ", href: "windows/camera-presets.html", summary: "シーンビューのカメラ操作を選ぶ・自分用に変える", keywords: "カメラ 操作プリセット プリセット管理 Shared Personal 複製して自分用にする チーム共有コピー 移動速度 高速倍率 Look Orbit Pan Dolly 感度 反転 View Snap FOV Near Clip Far Clip replaycamerapreset CameraPresets" },
    { title: "衝突の診断 ウィンドウ", href: "windows/collision-diagnostics.html", summary: "Collider の登録数、当たった相手、形の表示と色の意味", keywords: "衝突の診断 Collision Diagnostics Collider の形を描く コライダー 境界ボックス Mesh の三角形 ライトの範囲 Normal Adjust 接地 壁 Cook 再走査 すり抜け 色 橙 緑 水色 灰 赤 Character Motor" },
    { title: "Scene Flow ウィンドウ", href: "windows/scene-flow.html", summary: "イベント名と条件でシーンの移り先を決める", keywords: "Scene Flow シーンフロー replaysceneflow Transition Event Priority From To Any Scene Conditions 条件 フラグ Set Active Active Scene Flow TriggerFlow TriggerSceneFlow SetSceneFlowBool 遷移" }
  ]},
  { title: "データ形式", children: [
    { title: "データ形式の一覧", href: "data/index.html", summary: "拡張子、版、Saved フォルダー、セーブデータ", keywords: "拡張子 版 replaymaterial replaymotion replaycomp replayeasing replayatlas replaysceneflow replayloc replayeffect replayinput replayshadergraph replayrig Project.replayproject AssetDatabase Saved engine_log editor_log session.ini InputBindings replaysave セーブデータ スロット glb fbx png wav ttf hlsl LOCALAPPDATA" },
    { title: "シーンファイルとプレハブ", href: "data/scene-file.html", summary: ".replayscene / .replayprefab の中身、GUID、保存のしくみ", keywords: "シーン プレハブ replayscene replayprefab REPLAY_SCENE OBJECT COMPONENT PROPERTY 型名 vec3 enum asset GUID AssetDatabase replaydb Missing Asset 名前変更 bak tmp 自動保存 手で編集" }
  ]},
  { title: "C# スクリプト", children: [
    { title: "はじめてのスクリプト", href: "csharp/index.html", summary: "作る、書く、ビルド、付ける、動かす。インスペクターに出る変数と属性", keywords: "C# スクリプト MonoBehaviour 作成 Create Script ReplayGuid SerializeField public Range Tooltip Header HideInInspector ReadOnly DisplayName AssetType AssetReference List 配列 Script コンポーネント Execution Order Add Component Scripts/C# transform Rotate Time.deltaTime Lua" },
    { title: "呼ばれる順番（ライフサイクル）", href: "csharp/lifecycle.html", summary: "Awake、Start、Update、FixedUpdate、衝突、コルーチン、例外", keywords: "ライフサイクル Awake OnEnable Start Update FixedUpdate LateUpdate OnDisable OnDestroy OnCollisionEnter OnTriggerEnter Collision コルーチン StartCoroutine WaitForSeconds WaitUntil WaitWhile yield 例外 Time deltaTime timeScale Debug.Log 実行順" },
    { title: "GameObject・Component・Transform", href: "csharp/api-objects.html", summary: "探す、作る、消す、GetComponent、位置と回転", keywords: "API GameObject Find Create SetActive activeInHierarchy Object Destroy Instantiate Prefab PrefabAsset GetComponent TryGetComponent AddComponent GetComponentInChildren GetComponentInParent Behaviour enabled Transform position rotation eulerAngles localPosition localScale forward parent SetParent Translate Space.Self Rotate LookAt" },
    { title: "Vector3・Quaternion・Mathf", href: "csharp/api-math.html", summary: "ベクトル、回転、色、数学関数、AnimationCurve。Unity との違い", keywords: "API Vector3 Vector2 Vector4 X Y Z Zero One Up Normalized Magnitude Dot Cross Distance Lerp MoveTowards Quaternion Euler ラジアン AngleAxis LookRotation Slerp Identity Color Mathf Deg2Rad Clamp Sin AnimationCurve Keyframe Evaluate" },
    { title: "エンジンのコンポーネントを操作する", href: "csharp/api-components.html", summary: "Rigidbody、Collider、Camera、Animator、AudioSource、UIText など", keywords: "API Rigidbody AddForce AddImpulse velocity isKinematic useGravity WakeUp Collider BoxCollider SphereCollider CapsuleCollider isTrigger Camera fieldOfView MeshRenderer PointLight ParticleEmitter Emit Trail ScreenEffectStack Animator SetTrigger SetBool Play AudioSource UIText text UIImage fillAmount UIButton interactable Landscape Sculpt SampleHeight CharacterMotor PlayerInput" },
    { title: "入力（Input）", href: "csharp/api-input.html", summary: "アクション、軸、キーボード、マウス、ゲームパッド", keywords: "API Input GetButton GetButtonDown GetAxis MoveX MoveY Jump InputActions InputAxes GetKey GetKeyDown KeyCode Key GetMouseButton mousePosition mouseScrollDelta Gamepad GetGamepadButton GetLeftStick SetVibration" },
    { title: "レイキャストとシーンの切り替え", href: "csharp/api-physics-scene.html", summary: "Physics.Raycast、Overlap、SceneManager、Application.Quit", keywords: "API Physics Raycast RaycastHit RaycastAll SphereCast BoxCast CapsuleCast OverlapSphere OverlapBox PhysicsHit Ray SceneManager LoadScene LoadSceneAsync ReloadScene ReturnToPreviousScene TriggerFlow SceneAsset Application Quit" },
    { title: "ScriptBehaviour（ボタン・セーブ・イベント）", href: "csharp/script-behaviour.html", summary: "ボタンやスライダーの通知、シーン・アニメーションのイベント、セーブデータ、Timer と Tween", keywords: "ScriptBehaviour override OnButtonClicked OnAnyButtonClicked OnSliderValueChanged OnInputFieldSubmitted OnAnimationFinished OnAnimationEvent OnAnimatorStateChanged OnSceneLoaded OnApplicationQuit セーブ SetSaveInt GetSaveInt SaveGame LoadGame DeleteSave スロット Timer After Every Tween TweenValue Easing Runtime TryFindObject RequireObject ObjectHandle" },
    { title: "ビルドと、動かないとき", href: "csharp/build.html", summary: "C# をすべて更新、自動更新、状態表示、エラーの見方", keywords: "ビルド コンパイル C# をすべて更新 自動更新 Refresh C# Catalog Build Reload Unresolved Loaded Running Error .NET 8 hostfxr dotnet engine_log.txt 動かない csproj sln" }
  ]},
  { title: "起動オプションと設定", children: [
    { title: "起動オプション", href: "settings/command-line.html", summary: "--game、撮影、性能計測、動作テスト、検証スイート、DX12 デバッグ、環境変数、.replaygame", keywords: "コマンドライン 引数 capture-frame compare-golden profile-scene frames warmup screen-space ssao ssr taa smoke-test validate dump-component-properties dx12 debug-layer warp 環境変数 REPLAY_AUTO_PROFILE replaygame 書き出し 終了コード" },
    { title: "プロジェクト設定", href: "settings/project-settings.html", summary: "Startup Scene、起動ロゴ、ロード画面、Active Scene Flow、Input Action Asset、Localization、UI Focus Outline、種類別アイコン", keywords: "プロジェクト設定 Project replayproject Startup Scene 起動シーン Boot Logo 起動ロゴ Loading Screen ロード画面 Active Scene Flow Input Action Asset Localization 既定言語 UI Focus Outline 輪郭線 Default Controlled Character Prefab 操作キャラクター 新しいシーンを作成 Runtime 診断 種類別アイコン アトラス ワールド" },
  ]}
];
