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
        int black = 0;
        float stage = time / N; //1ループでのアルファ値の変化幅 
        /* ループ */
        for (int i = 0;i < N;i++){
            black = 255 * (i + 1) / N;
            image.color = new Color32(0, 0, 0, (byte)black);
            yield return new WaitForSeconds(stage); 
        }
    }
}
