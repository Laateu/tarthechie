using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class BlackOut : MonoBehaviour
{
    private Image image;

    void Start()
    {
        image = GetComponent<Image>();
        image.color= new Color32(0,0,0,0);
    }

    void Update()
    {
        if(Input.GetKeyDown(KeyCode.A)){
            StartCoroutine(Black_Out(5.0f,100));
        }
    }

    IEnumerator Black_Out(float time,int N){
        int alpha = 0; //アルファ値
        float step = time / N; //1ループでのアルファ値の変化幅 
        /* ループ */
        for (int i = 0;i < N;i++){
            alpha = 255 * (i + 1) / N;
            image.color = new Color32(0, 0, 0, (byte)alpha);
            yield return new WaitForSeconds(step); //ウェイト
        }
    }
}
