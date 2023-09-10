---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

1. [Temporal Cue Guided Video Highlight Detection With Low-Rank Audio-Visual Fusion](https://openaccess.thecvf.com/content/ICCV2021/papers/Ye_Temporal_Cue_Guided_Video_Highlight_Detection_With_Low-Rank_Audio-Visual_Fusion_ICCV_2021_paper.pdf) Qinghao Ye, Xiyue Shen, Yuan Gao, **Zirui Wang**, Qi Bi, Ping Li, Guang Yang; Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), 2021